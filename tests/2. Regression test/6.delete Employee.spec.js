import {test,expect} from '@playwright/test'
import HomePage from '../../POM/home.page'
import PIMPage from '../../POM/pim.page';

let homePage,pimPage;

test ('Delete Employee', async({page,baseURL})=>{

    homePage = new HomePage (page)
    pimPage = new PIMPage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await pimPage.PIMNavigation()
    await pimPage.searchForEmployee()
    await page.waitForTimeout(2000)
    await pimPage.deleteEmployee('12345')

    const rowCount = page.locator('.orangehrm-bottom-container').count()

        if (await rowCount === 0) {
            await console.log('The employee does not exist in the table.');
           } 
         else
           {
            await console.log('The employee exists in the table.');
           }

})