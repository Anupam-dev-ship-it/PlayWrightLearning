const {test,expect} = require('@playwright/test');

test('Screenshot Validation', async({browser})=>

{
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator('//input[@id="hide-textbox"]').click();
await page.screenshot({path : 'Screenshot.png'})
await page.locator('//input[@id="show-textbox"]').click();
await page.locator('//input[@id="displayed-text"]').screenshot({path: 'ElementScreenshot.png'})


})

test('Visual Testing',async({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 expect(await page.screenshot()).toMatchSnapshot('Practice.png');

})