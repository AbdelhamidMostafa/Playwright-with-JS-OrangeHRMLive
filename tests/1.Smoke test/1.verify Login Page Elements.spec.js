import {test,expect} from "@playwright/test"
import HomePage from '../../POM/home.page'

let homePage;

test ('Verify Login Page Elements',async({page,baseURL})=>{

    homePage = new HomePage (page)

    await page.goto(baseURL)
    await expect(homePage.userNameInput).toBeVisible()
    await expect(homePage.passwordInput).toBeVisible()
    await expect(homePage.loginBtn).toBeVisible()
    await expect(homePage.forgetPasswordLnk).toBeVisible()

})