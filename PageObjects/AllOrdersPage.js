class AllOrdersPage {
    constructor(page) {
        this.page = page;
        this.OrderTable = page.locator('tbody');
    }

    async viewOrderDetails(OrderId) {

        await this.OrderTable.waitFor();
        const orderRow = this.page.getByRole('row').filter({ hasText: OrderId });
        await orderRow.getByRole('button', { name: 'View' }).click();
    }
}
module.exports = { AllOrdersPage };