class OrderInfoPage
{
    constructor(page)
    {
        this.OrderId =  page.locator('//label[@class="ng-star-inserted"]');
        this.OrderPage =  page.getByText(' Orders History Page ');

    }

    async getOrderId()
    {
        const OrderId = (await this.OrderId.textContent())
        ?.replace(/\|/g, '')
        .trim() || '';
        await this.OrderPage.click();  
        return OrderId;
        

    }
}
module.exports = { OrderInfoPage };