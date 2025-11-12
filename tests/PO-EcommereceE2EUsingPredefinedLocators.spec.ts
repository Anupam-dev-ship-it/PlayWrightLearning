import { test, expect, Page } from "@playwright/test";
import { POmanager } from "../PageObjects_ts/POmanager";


// Import JSON test data
import dataSet from "../Utils/E2E-TestData.json" assert { type: "json" };

for (const data of dataSet) {
  test(`@Web E2E test using POManager for ${data.username}`, async ({ page }) => {

    // ✅ Create a single POmanager object
    const poManager :POmanager = new POmanager(page);

    // ✅ Access all pages through getter methods
    const loginPage = poManager.getLoginPage();
    const dashBoard = poManager.getDashBoard();
    const checkOutPage = poManager.getCheckOutPage();
    const paymentPage = poManager.getPaymentPage();
    const orderInfoPage = poManager.getOrderInfoPage();
    const allOrdersPage = poManager.getAllOrdersPage();

    // ✅ E2E flow
    await loginPage.goTo();
    await loginPage.loginToApplication(data.username, data.password);
    await dashBoard.selectNSearchProduct(data.DesiredProduct);
    await checkOutPage.ProductValidation(data.DesiredProduct);
    await paymentPage.fillPaymentDetailsAndPlaceOrder(
      data.expDate,
      data.expYear,
      data.cvv,
      data.nameOnCard
    );

    const orderId = await orderInfoPage.getOrderId();
    console.log(orderId);

    await allOrdersPage.viewOrderDetails(orderId);
  });
}
