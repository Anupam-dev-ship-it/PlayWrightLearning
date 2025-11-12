// @ts-check
const { test, expect } = require("@playwright/test");
const { Console } = require("console");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
test('E2E test Using getby locators', async ({page}) => {

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const loginEmail = page.getByPlaceholder('email@example.com');
 const loginPassword = page.getByPlaceholder('enter your passsword');
 const FrontPageLoginBtn = page.getByRole('button', { name: 'Login' });
 const Products = page.locator('//div[@class="card-body"]');
 const DesiredProduct = "ADIDAS ORIGINAL";
 const CartBtn = page.getByRole('listitem').getByRole('button',{name: 'Cart'});
 const ExpDropDownDate = page.locator('//select[@class="input ddl"]').first();
 const ExpDropDownYear = page.locator('//select[@class="input ddl"]').last();
 const Cvv = page.locator('//input[@class="input txt"]').first();
 const NameOnCard = page.locator('//input[@class="input txt"]').last();
 const placeholderbtn = page.getByText('Place Order ');
 const OrderTable = page.locator('tbody');
 const allOrderIds = page.locator('//tbody//th'); 
 await loginEmail.fill('anupampatel1236@xyz.com');
 await loginPassword.fill('Abc@123456');
 await FrontPageLoginBtn.click();
 await page.waitForLoadState('networkidle');
 await Products.filter({hasText:'ADIDAS ORIGINAL'}).getByRole('button',{name: ' Add To Cart'}).click();
 await CartBtn.click();
 await page.locator('div li').last().waitFor(); //  waiting for sometime to load the desired elemne coz isVisible() does not have a inbuilt wait 
 await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible(); //assertions
 await page.getByRole('button',{name: 'Checkout'}).click();
 const DropDownCard  = await page.locator('//div[@class="user__name mt-5"]').waitFor();
 const Dropdown = await page.getByPlaceholder('Select Country').pressSequentially('ind');
 await page.getByRole('button',{name:'India'}).nth(1).click();
 await ExpDropDownDate.click();
 await ExpDropDownYear.click();
 await Cvv.fill('028');
 await NameOnCard.fill('Anupam Patel');
 await placeholderbtn.click();
 const OrderId = (await page.locator('//label[@class="ng-star-inserted"]').textContent())
  ?.replace(/\|/g, '')
  .trim() || '';


 console.log(OrderId);
 const OrderPage = await page.getByText(' Orders History Page ').click();
 await OrderTable.waitFor();
 const orderRow = page.getByRole('row').filter({ hasText: OrderId });

await orderRow.getByRole('button', { name: 'View' }).click();

}); 