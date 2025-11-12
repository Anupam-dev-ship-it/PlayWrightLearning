const {test, expect} = require('@playwright/test');

test('First PlayWright Test', async({browser})=>
{
 const context= await browser.newContext();
 const page= await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await page.locator('//input[@name="username"]').fill('Learning');
 await page.locator('//input[@name="password"]').fill('Learning');
 await page.locator('//input[@id="signInBtn"]').click();
 const ErrorMesage = await page.locator("//div[contains(@style,'block')]").textContent();
 console.log(ErrorMesage);
  expect(ErrorMesage).toContain('Incorrect username/password.');
});

test('login to the page  PlayWright Test', async({browser})=>
{
 const context= await browser.newContext();
 const page= await context.newPage();
 const UserName = page.locator('//input[@name="username"]') 
 const password = page.locator('//input[@name="password"]')
 const SiginInBtn = page.locator('//input[@id="signInBtn"]')
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await UserName.fill('Learning');
 await password.fill('Learning');
 await SiginInBtn.click();
 const ErrorMesage = await page.locator("//div[contains(@style,'block')]").textContent();
 console.log(ErrorMesage);
  expect(ErrorMesage).toContain('Incorrect username/password.');
  await UserName.fill('rahulshettyacademy');
  await password.fill('learning');
  await SiginInBtn.click();
  console.log(await page.locator('//a[text()="iphone X"]').textContent());  
}); 

test('Registering to the page  PlayWright Test', async({browser})=>
{
 const context= await browser.newContext();
 const page= await context.newPage();
 await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
 const RegisterLink = page.locator('//p[@class="login-wrapper-footer-text"]');
 //await RegisterLink.click();
 const FirstName = page.locator('//input[@type="firstName"]');
 const LastName = page.locator('//input[@type="lastName"]');
 const email = page.locator('//input[@type="email"]');
 const PhoneNumber = page.locator('//input[@type="text"]');
 const Dropdown = page.locator('//input[@type="text"]');
 const Gender = page.locator('//input[@value="Male"]');
 const Password = page.locator('//input[@id="userPassword"]');
 const confirmPassword = page.locator('//input[@id="confirmPassword"]');
 const CheckBox = page.locator('//input[@type="checkbox"]');
 const RegisterBtn = page.locator('//input[@name="login"]');
 const loginBtn = page.locator('//button[@class="btn btn-primary"]');
 const loginEmail = page.locator('//input[@id="userEmail"]');
 const loginPassword = page.locator('//input[@id="userPassword"]');
 const FrontPageLoginBtn = page.locator('//input[@id="login"]');
 const Product = page.locator('//b[text()="ZARA COAT 3"]');
 await RegisterLink.click();
 await FirstName.fill("Anupam1");
 await LastName.fill("Patel1");
 await email.fill("anupampatel1236@xyz.com");
 await PhoneNumber.fill("1234567890");
 await Dropdown.selectText('Student');
 await Gender.click();
 await Password.fill('Abc@123456');
 await confirmPassword.fill('Abc@123456');
 await CheckBox.click();
 await RegisterBtn.click();
 await loginBtn.click();
 await loginEmail.fill('anupampatel1236@xyz.com');
 await loginPassword.fill('Abc@123456');
 await FrontPageLoginBtn.click(); 
//  await loginEmail.click();
//  await loginPassword.click();
 console.log(await Product.textContent());
 }); 