const { LoginPage } = require('./LoginPage');
const { DashBoard } = require('./DashBoard');
const { CheckOutPage } = require('./CheckOutPage');
const { PaymentPage } = require('./PaymentPage');
const { OrderInfoPage } = require('./OrderInfoPage');
const { AllOrdersPage } = require('./AllOrdersPage');

class POmanager {

    constructor(page) {
        this.loginpage = new LoginPage(page);
        this.dashBoard = new DashBoard(page);
        this.checkOutPage = new CheckOutPage(page);
        this.paymentPage = new PaymentPage(page);
        this.orderInfoPage = new OrderInfoPage(page);
        this.allOrdersPage = new AllOrdersPage(page);
    }

    getLoginPage() {
        return this.loginpage;
    }
    getDashBoard() {
        return this.dashBoard;
    }
    getCheckOutPage() {
        return this.checkOutPage;
    }
    getPaymentPage() {
        return this.paymentPage;
    }
    getOrderInfoPage() {
        return this.orderInfoPage;
    }
    getAllOrdersPage() {
        return this.allOrdersPage;
    }

}
module.exports = { POmanager };