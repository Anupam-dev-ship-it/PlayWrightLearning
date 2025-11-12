// @ts-check
const { test, expect } = require("@playwright/test");
const { Console } = require("console");
const { POmanager } = require("../PageObjects/POmanager");
const dataSet = JSON.parse(JSON.stringify(require('../Utils/E2E-TestData.json')));

/**
 * @param {{ browser: import('@playwright/test').Browser }}
 */
for (const data of dataSet) {
    test(`E2E test Using getby locators for ${data.username}`, async ({ page }) => {
        const poManager = new POmanager(page);
        const loginpage = poManager.getLoginPage();
        const dashBoard = poManager.getDashBoard();
        const checkOutPage = poManager.getCheckOutPage();
        const paymentPage = poManager.getPaymentPage();
        const orderInfoPage = poManager.getOrderInfoPage();
        const allOrdersPage = poManager.getAllOrdersPage();
        await loginpage.goTo();
        await loginpage.loginToApplication(data.username, data.password);
        await dashBoard.selectNSearchProduct(data.DesiredProduct);
        await checkOutPage.ProductValidation(data.DesiredProduct);
        await paymentPage.fillPaymentDetailsAndPlaceOrder(data.expDate, data.expYear, data.cvv, data.nameOnCard);
        const OrderId = await orderInfoPage.getOrderId();
        console.log(OrderId);
        await allOrdersPage.viewOrderDetails(OrderId);
    });
}