const { chromium } = require('@playwright/test');
const { POmanager } = require('../../PageObjects/POmanager');
const { Before, After,AfterStep,Status,setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(10 * 1000);

Before(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POmanager(this.page);
});

After(async function () {
    console.log("I am Last to execute");
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'Screenshot1.png' });
    }


});