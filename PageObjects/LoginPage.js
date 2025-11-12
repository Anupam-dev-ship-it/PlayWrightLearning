class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginEmail = page.getByPlaceholder('email@example.com');
        this.loginPassword = page.getByPlaceholder('enter your passsword');
        this.FrontPageLoginBtn = page.getByRole('button', { name: 'Login' });

    }

    async loginToApplication(username, password) {

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