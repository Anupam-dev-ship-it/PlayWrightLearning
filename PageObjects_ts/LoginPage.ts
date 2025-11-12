import { test,Page,Locator } from '@playwright/test';
export class LoginPage {


    page: Page;
    loginEmail: Locator;
    loginPassword: Locator;
    FrontPageLoginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginEmail = page.getByPlaceholder('email@example.com');
        this.loginPassword = page.getByPlaceholder('enter your passsword');
        this.FrontPageLoginBtn = page.getByRole('button', { name: 'Login' });

    }

    async loginToApplication(username:string, password:string) {

        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.FrontPageLoginBtn.click();
    }

    async goTo()
    {

        this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await this.page.waitForLoadState('networkidle');
    }




}
module.exports = { LoginPage };