import {test,expect} from '@playwright/test'
import HomePage from '../../POM/home.page'
import PIMPage from '../../POM/pim.page';

let homePage,pimPage;

test ('Search for Employee by ID', async({page,baseURL})=>{

    homePage = new HomePage (page)
    pimPage = new PIMPage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await pimPage.PIMNavigation()
    await page.waitForTimeout(2000)
    await pimPage.searchForEmployee('12345')
    
    const employeeNr12345 = page.getByRole('row', {name:('12345')}).nth(0)
    await expect(employeeNr12345).toHaveText('12345Mostafa Khalid')
    

    })