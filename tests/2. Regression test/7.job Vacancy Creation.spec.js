import {test,expect} from '@playwright/test'
import HomePage from '../../POM/home.page'
import RecruitmentPage from '../../POM/recruitment.page';



let homePage,recruitmentPage;

test ('Job Vacancy Creation', async({page,baseURL})=>{

    homePage = new HomePage (page)
    recruitmentPage = new RecruitmentPage (page)

    await page.goto(baseURL)
    await homePage.login('Admin', 'admin123')
    await recruitmentPage.recruitmentNavigation()
    await recruitmentPage.vacanciesTab.click()
    await recruitmentPage.addVacancyBtn.click()
    await recruitmentPage.vacancyNameInput.fill('IT')
    await recruitmentPage.jobTitleDDL.click()
    await recruitmentPage.softwareEngineerOption.click()
    await recruitmentPage.hiringManagerInput.pressSequentially('Timothy Lewis Amiano',{ delay: 500 })
    await recruitmentPage.saveBtn.click()
    await page.waitForTimeout(2000)

    await recruitmentPage.recruitmentNavigation()
    await page.waitForTimeout(5000)
    await recruitmentPage.vacanciesTab.click()
    await page.waitForTimeout(2000)
    await recruitmentPage.jobTitleDDL.click()
    await recruitmentPage.softwareEngineerOption.click()
    await recruitmentPage.searchBtn.click()

    const addedVacancy = page.getByRole('row', {name:("Software Engineer")}).nth(0)
    await expect(addedVacancy).toHaveText('ITSoftware EngineerTimothy AmianoActive')

})