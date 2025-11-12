//import { test, expect } from '@playwright/test';
const {test,expect} = require('@playwright/test');

test('Invalid Login test', async ({page})=>
    {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('invalidUser');
    await page.locator('#password').fill('invalidPass');
    await page.locator('#signInBtn').click();
    const errorMessage = await page.locator("[style*='block']").textContent();
    console.log(errorMessage);
    expect(errorMessage).toContain('Incorrect username/password.');

    });