const { test, expect } = require('@playwright/test');

test('@Api Security test request intercept', async ({ page }) => {
    //page.route('**/*.css',route=>route.abort());

    //  Optional: Block specific resource types (e.g., CSS)
    // page.route('**/*.css', route => route.abort());
    // → Blocks all CSS requests → speeds up test but page looks plain.

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.pause();
    const loginEmail = page.locator('//input[@id="userEmail"]');
    const loginPassword = page.locator('//input[@id="userPassword"]');
    const FrontPageLoginBtn = page.locator('//input[@id="login"]');
    await loginEmail.fill('anupampatel1236@xyz.com');
    await loginPassword.fill('Abc@123456');
    await FrontPageLoginBtn.click();
    await page.waitForLoadState('networkidle');
    // ---------------------------------------------------------
    //  Log all network requests and responses
    // 'page.on()' registers event listeners for request/response events.
    // Great for debugging or analyzing API calls.
    // ---------------------------------------------------------
    page.on('request', request => console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));


    const Ordersbtn = page.getByRole('button', { name: 'Orders' }).click();
    //  Intercept the API call made when clicking "View" order
    // • 'page.route()' allows intercepting requests before they hit the server
    // • We can mock, block, or modify requests in real time
    await page.route(
        'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route =>
            //  Here we continue the request but override the URL
            // (simulates fetching another order ID instead of the real one)
            route.continue({
                url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68f13f4bf669d6cb0a17e1cc'
            })
    );

    await page.locator('//button[text()="View"]').first().click();
    //await page.pause();
    await expect(page.locator('//p').last()).toHaveText('You are not authorize to view this order');



});