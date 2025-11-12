// @ts-check
const { test, expect } = require("@playwright/test");

/** @type {import('@playwright/test').BrowserContext} */
let webContext;
test.describe.configure({ mode: 'parallel' }); // all the tests in this file will run in parallel
                                               //if u put 'serial' then all tests will run one by one in sequence and if first test fails then other tests will be skipped
test.beforeAll(async ({browser})=>
{
    const context =await browser.newContext();
    //await context.tracing.start();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const loginEmail = page.locator('//input[@id="userEmail"]');
    const loginPassword = page.locator('//input[@id="userPassword"]');
    await loginEmail.fill('anupampatel1236@xyz.com');
    await loginPassword.fill('Abc@123456');
    const FrontPageLoginBtn = page.locator('//input[@id="login"]');
    await FrontPageLoginBtn.click();
    await page.waitForLoadState('networkidle');
    
    await context.storageState({path:'state.json'});
    //await context.tracing.stop({ path: 'trace-beforeAll.zip' });
     webContext  = await browser.newContext({storageState:'state.json'});



});
test('First PlayWright Test', async () => {


 const page = await webContext.newPage();
 await page.goto("https://rahulshettyacademy.com/client");
 const Products = page.locator('//div[@class="card-body"]');
 const DesiredProduct = "ADIDAS ORIGINAL";
 const CartBtn = page.locator('//button[contains(@routerlink,"cart")]');
 const ExpDropDownDate = page.locator('//select[@class="input ddl"]').first();
 const ExpDropDownYear = page.locator('//select[@class="input ddl"]').last();
 const Cvv = page.locator('//input[@class="input txt"]').first();
 const NameOnCard = page.locator('//input[@class="input txt"]').last();
 const placeholderbtn = page.locator("//a[text()='Place Order ']");
 const OrderTable = page.locator('tbody');
 const allOrderIds = page.locator('//tbody//th'); 
 

 
 
 
 const count = await Products.count();
 //const TotalProduct = await Products.last().waitFor();
 for (let index = 0; index < count; index++) {
    console.log('Running2')
     
    if (await Products.nth(index).locator("//b").textContent() === DesiredProduct) {
        
        await Products.nth(index).locator("text= Add To Cart").click();
        break;
        
    }
  
 }
 await CartBtn.click();
 await page.locator('div li').last().waitFor(); //  waiting for sometime to load the desired elemne coz isVisible() does not have a inbuilt wait 
 const bool = await page.locator(("h3:has-text('ADIDAS ORIGINAL')")).isVisible();//"h3:has-text('ADIDAS ORIGINAL')") a way of finding an elemnent witha combination of text and tagname
 expect(bool).toBeTruthy(); //assertions
 const CheckOut = page.locator('//button[@type="button"]').last();
 await CheckOut.click();
 const DropDownCard  = await page.locator('//div[@class="user__name mt-5"]').waitFor();
 const Dropdown = await page.locator('//input[@placeholder="Select Country"]').pressSequentially('ind');
 const Suggestions = page.locator('//section[contains(@class,"ta-results")]');
 await Suggestions.waitFor();
 const OptionsCount  = await page.locator('//button[@type="button"]').count();
 console.log(OptionsCount);
 for (let index = 0; index < OptionsCount; index++) {
    const Text =  await Suggestions.locator('//button[@type="button"]').nth(index).textContent();
//console.log(Text)
    if(Text === ' India'){
        await Suggestions.locator('//button[@type="button"]').nth(index).click();
        console.log(Text)
        break;
    }  
 }
 await ExpDropDownDate.selectOption('06');
 await ExpDropDownYear.selectOption('28');
 await Cvv.fill('028');
 await NameOnCard.fill('Anupam Patel');
 await placeholderbtn.click();
 const OrderId = await page.locator('//label[@class="ng-star-inserted"]').textContent();
 if (OrderId === null) {
    console.log('OrderId is null');
} else {
    console.log('OrderId is not null');
}
 console.log(OrderId);
 const OrderPage = await page.getByText(' Orders History Page ').click();
 await OrderTable.waitFor();
 const count1 = await allOrderIds.count();
 console.log(count1);
 for (let index = 0; index < count1; index++) {
    const ActualOrderid = await allOrderIds.nth(index).textContent();
    if ((OrderId ?? '').includes(ActualOrderid ?? '')){
        console.log(ActualOrderid);
        break;
    }  
 }
}); 