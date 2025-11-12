//const { expect } = require('@playwright/test');
import { test,expect,Page,Locator  } from '@playwright/test';

export class CheckOutPage 
{
    page: Page;
    elementTobeloaded: Locator;
    checkoutbtn: Locator;
    constructor(page: Page)
    {
        this.page = page;
        this.elementTobeloaded = page.locator('div li');
        this.checkoutbtn = page.getByRole('button', { name: 'Checkout' })

    }
    async ProductValidation(DesiredProduct: string)
    {
        await this.elementTobeloaded.last().waitFor(); //  waiting for sometime to load the desired elemne coz isVisible() does not have a inbuilt wait
        await expect(this.page.getByText(DesiredProduct)).toBeVisible();
        await this.checkoutbtn.click();
    
    }
}
module.exports = { CheckOutPage };