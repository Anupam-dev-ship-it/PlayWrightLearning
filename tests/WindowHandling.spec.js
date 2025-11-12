// @ts-check
const { test, expect } = require("@playwright/test");
const { promises } = require("dns");

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
test('Window Handle', async ({browser}) => {

    const context= await browser.newContext();
    const page= await context.newPage();
    const Link= page.locator('//a[@class="blinkingText"]').first();
     
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const [newPage] = await Promise.all
    ([context.waitForEvent('page'),
    Link.click()])

    const actualText = await newPage.locator('//p[@class="im-para red"]').textContent();
    //const text1 = await actualText.textContent();
    console.log(actualText);

});
  