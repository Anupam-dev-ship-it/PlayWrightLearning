// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
test('First PlayWright Test', async ({page}) => {

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const loginEmail = page.locator('//input[@id="userEmail"]');
 const loginPassword = page.locator('//input[@id="userPassword"]');
 const FrontPageLoginBtn = page.locator('//input[@id="login"]');
 const Products = page.locator('//div[@class="card-body"]//b');
 await loginEmail.fill('anupampatel1236@xyz.com');
 await loginPassword.fill('Abc@123456');
 await FrontPageLoginBtn.click();
 //await page.waitForLoadState('networkidle');
 await page.locator('//div[@class="card-body"]//b').last().waitFor();
 console.log(await Products.allTextContents()); 
});
