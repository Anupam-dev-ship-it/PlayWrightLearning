//const { LoginPage } = require('./LoginPage');
import { LoginPage } from './LoginPage';
import { DashBoard } from './DashBoard';
import { CheckOutPage } from './CheckOutPage';
import { PaymentPage } from './PaymentPage';
import { OrderInfoPage } from './OrderInfoPage';
import { AllOrdersPage } from './AllOrdersPage';
import { Page } from '@playwright/test';

export class POmanager {

    loginpage: LoginPage;
    dashBoard: DashBoard;
    checkOutPage: CheckOutPage;
    paymentPage: PaymentPage; 
    orderInfoPage: OrderInfoPage;
    allOrdersPage: AllOrdersPage;
    page: Page;


    constructor(page: Page) {
        this.page = page;
        this.loginpage  = new LoginPage(page);
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