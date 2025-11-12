const { Given, When, Then } = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');



Given('a login to Ecommerce application with username {string} and password {string}', async function (username, password) {

    const loginpage = this.poManager.getLoginPage();
    await loginpage.goTo();
    await loginpage.loginToApplication(username, password);
});

When('I add the product {string} to the cart', async function (DesiredProduct) {
    const dashBoard = this.poManager.getDashBoard();
    await dashBoard.selectNSearchProduct(DesiredProduct);
});
Then('verify {string} is displayed in the cart', async function (DesiredProduct) {
    const checkOutPage = this.poManager.getCheckOutPage();
    await checkOutPage.ProductValidation(DesiredProduct);
});

When(
    'Enter valid credentials {string} and {string} and {string} and {string} and place the order',
    async function (expDate, expYear, cvvNumber, nameOnCard) {
        const paymentPage = this.poManager.getPaymentPage();
        await paymentPage.fillPaymentDetailsAndPlaceOrder(expDate, expYear, cvvNumber, nameOnCard);
    }
);

Then('Verify OrderId is displayed in the Orders page', async function () {
    const orderInfoPage = this.poManager.getOrderInfoPage();
    const allOrdersPage = this.poManager.getAllOrdersPage();
    const orderId = await orderInfoPage.getOrderId();
    console.log(orderId);
    await allOrdersPage.viewOrderDetails(orderId);
});

Given('a login to Ecommerce2 application with username {string} and password {string}', async function (username, password) {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#signInBtn').click();
});

Then('Verify error message is displayed', async function () {
    const errorMessage = await this.page.locator("[style*='block']").textContent();
    console.log(errorMessage);
    expect(errorMessage).toContain('Incorrect username/password.');

});


