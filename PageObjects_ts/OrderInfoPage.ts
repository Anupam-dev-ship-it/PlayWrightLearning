import { test,Page,Locator } from '@playwright/test';

export class OrderInfoPage
{
    OrderId: Locator;
    OrderPage: Locator;
    constructor(page: Page)
    {
        this.OrderId =  page.locator('//label[@class="ng-star-inserted"]');
        this.OrderPage =  page.getByText(' Orders History Page ');

    }

    async getOrderId() :Promise<any>
    {
        const OrderId = (await this.OrderId.textContent())
        ?.replace(/\|/g, '')
        .trim() || '';
        await this.OrderPage.click();  
        return OrderId;
        

    }
}
module.exports = { OrderInfoPage };