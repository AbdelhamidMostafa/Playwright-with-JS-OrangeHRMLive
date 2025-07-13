import {test,expect} from "@playwright/test"
import HomePage from "../../POM/home.page"
import DashboardPage from "../../POM/dashboard.page"

let homePage,dashboard;

test ('Login with Valid Credentia', async({page,baseURL})=>{

    homePage = new HomePage (page)
    dashboard = new DashboardPage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await expect(dashboard.dashboardChapter).toBeVisible()
})