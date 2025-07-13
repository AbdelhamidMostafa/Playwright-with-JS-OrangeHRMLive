import {Locator, test}from "@playwright/test"

class HomePage{
    constructor(page){
        this.page = page
        this.userNameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.getByPlaceholder('password')
        this.loginBtn = page.getByRole('button', {name:('Login')})
        this.forgetPasswordLnk = page.locator('text=Forgot your password?')
    }

    async login(username, password){
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }
}

export default HomePage