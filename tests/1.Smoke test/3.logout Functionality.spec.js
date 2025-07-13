import {test, expect} from "@playwright/test"
import HomePage from "../../POM/home.page"
import DashboardPage from "../../POM/dashboard.page"
import ProfilePage from "../../POM/profile.page";


let homePage,dashboard,profilePage;

test ('Logout Functionality', async({page, baseURL})=>{

    homePage = new HomePage (page)
    dashboard = new DashboardPage (page)
    profilePage = new ProfilePage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await profilePage.logout()
    await expect(homePage.userNameInput).toBeVisible()
    await expect(homePage.passwordInput).toBeVisible()

})