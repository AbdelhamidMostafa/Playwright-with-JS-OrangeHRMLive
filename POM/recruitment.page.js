class RecruitmentPage {
    constructor(page){
    this.page = page
    this.recruitmentChapter = page.getByRole('link', {name:"Recruitment"}).first()
    this.candidateTab = page.getByText('Candidate')
    // Vacancies tab
    this.vacanciesTab = page.getByText('Vacancies')
    this.addVacancyBtn = page.getByRole('button', {name:'Add'})
    this.searchBtn = page.getByRole('button', {name:'Search'})
    // Add Vacancy
    this.vacancyNameInput = page.locator(".oxd-input-group .oxd-input") .first()
    this.jobTitleDDL = page.locator('.oxd-select-text-input').first()
    this.softwareEngineerOption = page.getByRole('option', { name: 'Software Engineer' })
    this.hiringManagerInput = page.getByRole('textbox',{name:('Type for hints...')})
    this.saveBtn = page.getByRole('button', {name:'Save'})
    }

    async recruitmentNavigation(){
        await this.recruitmentChapter.click()
    }   

}

export default RecruitmentPage