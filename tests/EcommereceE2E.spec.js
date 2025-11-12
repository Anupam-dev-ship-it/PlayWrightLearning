// @ts-check
const { test, expect } = require("@playwright/test");
const { Console } = require("console");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
test('First PlayWright Test', async ({page}) => {

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const loginEmail = page.locator('//input[@id="userEmail"]');
 const loginPassword = page.locator('//input[@id="userPassword"]');
 const FrontPageLoginBtn = page.locator('//input[@id="login"]');
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
 await loginEmail.fill('anupampatel1236@xyz.com');
 await loginPassword.fill('Abc@123456');
 await FrontPageLoginBtn.click();
 await page.waitForLoadState('networkidle');
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