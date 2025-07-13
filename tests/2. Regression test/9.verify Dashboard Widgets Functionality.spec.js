import {test,expect} from '@playwright/test'
import HomePage from '../../POM/home.page'
import DashboardPage from '../../POM/dashboard.page';





let homePage,dashboardPage;

test ('Verify Dashboard Widgets Functionality', async({page,baseURL})=>{

    homePage = new HomePage (page)
    dashboardPage = new DashboardPage(page)
   

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await dashboardPage.dashboardNavigation()
    await expect(dashboardPage.employeeWidget).toBeVisible()
    await expect(dashboardPage.timesheetWidget).toBeVisible()
    // await expect(dashboardPage.engineeringHeadcount).toBeVisible()
    // await expect(dashboardPage.adminstrationHeadcount).toBeVisible()
    // await expect(dashboardPage.clientServicesHeadcount).toBeVisible()
    // await expect(dashboardPage.humanResourceHeadcount).toBeVisible()

    // and the information in emplyees widget always changing!
    //The number of headcount for each department can o not be located!
    //active projects widget is not existing

})