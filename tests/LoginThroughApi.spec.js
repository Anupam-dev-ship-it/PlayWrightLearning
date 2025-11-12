// @ts-check
const { test, expect,request } = require("@playwright/test");
const { Console } = require("console");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
const RequestPayload = {userEmail: "abc1236@ggamil.com", userPassword: "Abc@123456"} 
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68a961719320a140fe1ca57c"}]}
/**
 * @type {string}
 */
let token;
/** @type {string} */
let orderid;
test.beforeAll('LoginThrough API',async()=>{

   
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

test('First PlayWright Test', async ({page}) => {

   await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client/");

   
    const Ordersbtn = page.getByRole('button', { name: 'Orders' }).click();
   
  const OrderTable = page.locator('tbody');
  const allOrderIds = page.locator('//tbody//th'); 

 await OrderTable.waitFor();
 const count1 = await allOrderIds.count();
 console.log(count1);
 for (let index = 0; index < count1; index++) {
    const ActualOrderid = await allOrderIds.nth(index).textContent();
    if ((orderid ?? '').includes(ActualOrderid ?? '')){
        console.log(ActualOrderid);
        console.log('testing');
        break;
    }  
 }
}); 