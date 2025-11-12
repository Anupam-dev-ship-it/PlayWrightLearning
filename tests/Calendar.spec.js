const {test, expect} = require('@playwright/test');

test('CalendarTesting', async({page})=>
{
 
const Year = "2028";
const Month = "7";
const Date = "12";

 await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
 await page.locator("//button[contains(@class,'react-date-picker')]").last().click();
 await page.locator("//span[contains(@class,'react-calendar__navigation__label')]").click();
 await page.locator("//span[contains(@class,'react-calendar__navigation__label')]").click();
 await page.getByText(Year).click();
 await page.locator('//div[@class="react-calendar__year-view__months"]').nth(Month-1).click();
 await page.locator("//abbr[text()='"+Date+"]').click();]").click();


 

});