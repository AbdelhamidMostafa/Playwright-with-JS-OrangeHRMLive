import {test,expect} from '@playwright/test'
import HomePage from '../../POM/home.page'
import LeaveManagementPage from '../../POM/leave.page';




let homePage,leavePage;

test ('Employee Leave Request', async({page,baseURL})=>{

    homePage = new HomePage (page)
    leavePage = new LeaveManagementPage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await leavePage.leaveNavigation()
    //Apply tab no more has attribute to interact with.

})