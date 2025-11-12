// @ts-check
const { test, expect,request } = require("@playwright/test");
const { Console } = require("console");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
const RequestPayload = {userEmail: "abc1236@ggamil.com", userPassword: "Abc@123456"} 
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68a961719320a140fe1ca57c"}]}
const fakepayload = {message:"No Product in Cart"}
/**
 * @type {string}
 */
let token;
/** @type {string} */
let orderid;
test.beforeAll('@Api LoginThrough API',async()=>{

   
 const requestContext = await request.newContext();
  const loginResponse = await requestContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    
    
    {
        data: RequestPayload
    
    });
expect(loginResponse.ok()).toBeTruthy();
const loginResponsePayload =  await loginResponse.json();
 token = loginResponsePayload.token;
console.log(token);

//


const orderResponse = await requestContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    
    {

data: orderPayload,
headers: {
    'Authorization': token,
    'Content-Type': 'application/json'
}
})
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
 orderid = orderResponseJson.orders[0];

});

test('@Api First PlayWright Test', async ({page}) => {

   await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client/");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", async route =>
    {
        
        //intercepting response -> API Response from server ->{playwright modify response} -> send modified response to browser
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakepayload); 
        // Fulfill intercepted route with custom body while preserving other response parts
    route.fulfill({
      response, // base response headers/status etc.
      body,     // modified payload
    });
  });
    const Ordersbtn = page.getByRole('button', { name: 'Orders' }).click();
   //  Wait for mocked API to complete (important for stability)
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

    console.log(await page.locator('//div[@class="mt-4 ng-star-inserted"]').textContent());

}); 