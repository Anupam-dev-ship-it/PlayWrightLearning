const {APIUtils} =  require('../Utils/APIUtils');
// @ts-check
const { test, expect,request } = require("@playwright/test");
const { Console } = require("console");

const RequestPayload = {userEmail: "abc1236@ggamil.com", userPassword: "Abc@123456"} 
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68a961719320a140fe1ca57c"}]}
/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */

let response;
test.beforeAll('LoginThrough API',async()=>{

   
 const requestContext = await request.newContext();
const apiutils = new APIUtils(requestContext, RequestPayload);
response = await apiutils.createOrder(orderPayload);
  
});

test('Create Order Test', async ({page}) => {
   

   await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");

   
    const Ordersbtn = page.getByRole('button', { name: 'Orders' }).click();
   
  const OrderTable = page.locator('tbody');
  const allOrderIds = page.locator('//tbody//th'); 

 await OrderTable.waitFor();
 const count1 = await allOrderIds.count();
 console.log(count1);
 for (let index = 0; index < count1; index++) {
    const ActualOrderid = await allOrderIds.nth(index).textContent();
    if ((response.orderid ?? '').includes(ActualOrderid ?? '')){
        console.log(ActualOrderid);
        console.log('testing');
        break;
    }  
 }
}); 