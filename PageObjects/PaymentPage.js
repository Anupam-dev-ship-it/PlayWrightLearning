class PaymentPage {
    constructor(page) {

        this.page = page;
        this.ExpDropDownDate = page.locator('//select[@class="input ddl"]').first();
        this.ExpDropDownYear = page.locator('//select[@class="input ddl"]').last();
        this.Cvv = page.locator('//input[@class="input txt"]').first();
        this.NameOnCard = page.locator('//input[@class="input txt"]').last();
        this.placeholderbtn = page.getByText('Place Order ');
        this.DropDownCard = page.locator('//div[@class="user__name mt-5"]');
        this.Dropdown = page.getByPlaceholder('Select Country')
    }
    async fillPaymentDetailsAndPlaceOrder(expDate, expYear, cvvNumber, nameOnCard) {
        await this.DropDownCard.waitFor();
        await this.Dropdown.pressSequentially('ind');
        await this.page.getByRole('button', { name: 'India' }).nth(1).click();
        await this.ExpDropDownDate.selectOption(expDate);
        await this.ExpDropDownYear.selectOption(expYear);
        await this.Cvv.fill(cvvNumber);
        await this.NameOnCard.fill(nameOnCard);
        await this.placeholderbtn.click();

    }
}
module.exports = { PaymentPage };