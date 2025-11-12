import { test,Page,Locator } from '@playwright/test';

export class AllOrdersPage {
    page: Page;
    OrderTable: Locator;
    constructor(page: Page) {
        this.page = page;
        this.OrderTable = page.locator('tbody');
    }

    async viewOrderDetails(OrderId: string) {

        await this.OrderTable.waitFor();
        const orderRow = this.page.getByRole('row').filter({ hasText: OrderId });
        await orderRow.getByRole('button', { name: 'View' }).click();
    }
}
module.exports = { AllOrdersPage };