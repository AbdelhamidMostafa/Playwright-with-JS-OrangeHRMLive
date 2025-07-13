class PIMPage {
    constructor(page){
        this.page = page
        //Navigation
        this.pimChapter = page.getByRole('link', {name:"PIM"})
        //Report Tab
        this.reportsTab = page.getByText('Reports')
        //Add Employee Tab
        this.addEmployeeTab = page.getByText('Add Employee')
        this.firstNameInput = page.getByRole('textbox', {name:('First Name')})
        this.middleNameInput = page.getByPlaceholder('Middle Name')
        this.lastNameInput = page.getByRole('textbox', {name:('Last Name')})
        this.employeeIDInput = page.locator('.oxd-input-field-bottom-space .oxd-input').last()
        this.saveBtn = page.getByRole('button', {name:(' Save ')})
        //Employee List Tap
        this.employeeListTab = page.getByText('Employee List')
        this.employeeIDInput = page.locator('.oxd-input-field-bottom-space .oxd-input').last()
        this.searchBtn = page.getByRole('button', {name:(' Search ')})

        //Employee search table
        this.deleteCheckBox = page.locator('//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]').last()
        this.deleteBtn = page.locator('[class="oxd-icon bi-trash"]').first()

        //Confirmation message for deletion
        this.areYouSureYes = page.locator('[class="oxd-icon bi-trash oxd-button-icon"]')
        this.areYouSureNo = page.locator('class="oxd-button oxd-button--medium oxd-button--ghost orangehrm-button-margin"')

    }

    async PIMNavigation(){
        await this.pimChapter.click()
    }

    async addEmployee(){
        await this.addEmployeeTab.click({force:true})
        await this.firstNameInput.fill("Mostafa")
        await this.lastNameInput.fill("Khalid")
        await this.employeeIDInput.fill(' ')
        await this.employeeIDInput.pressSequentially('12345', { delay: 1000 })
        await this.saveBtn.click({force:true})
    }

    async searchForEmployee(employeeNr){
        await this.employeeListTab.click()
        await this.employeeIDInput.pressSequentially(employeeNr, { delay: 1000 })
        await this.searchBtn.click({force:true})
    }

    async deleteEmployee(employeeNr){
        await this.employeeListTab.click()
        await this.employeeIDInput.fill(employeeNr)
        await this.searchBtn.click({force:true})
        await this.deleteCheckBox.click({force:true})
        await this.deleteBtn.click({force:true})
        await this.areYouSureYes.click({force:true})
    }
}

export default PIMPage