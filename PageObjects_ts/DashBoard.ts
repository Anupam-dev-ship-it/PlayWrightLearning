import { test,Page,Locator } from '@playwright/test';

export class DashBoard
{
    products: Locator;
    CartBtn: Locator;

    constructor(page: Page)
    {

        this.products = page.locator('//div[@class="card-body"]');
        this.CartBtn = page.getByRole('listitem').getByRole('button', { name: 'Cart' });



    }

    async selectNSearchProduct(DesiredProduct: string)
    {
        await this.products.filter({ hasText: DesiredProduct }).getByRole('button', { name: ' Add To Cart' }).click();
        await this.CartBtn.click();


    }
}
module.exports = { DashBoard };