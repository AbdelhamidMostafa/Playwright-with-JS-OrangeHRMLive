class DashboardPage{
    constructor(page){
        this.page = page
        this.dashboardChapter = page.getByRole('link',{name:('Dashboard')})
        this.employeeWidget = page.locator('p', {hasText:('Employee Distribution by Sub Unit')})
        this.timesheetWidget = page.getByRole('button', {name:'Timesheets'})
        this.engineeringHeadcount = page.locator('span', {hasText:('Engineering')})
        this.humanResourceHeadcount = page.locator('span', {hasText:'Human Resources'})
        this.adminstrationHeadcount  = page.locator('span', {hasText:'Administration'})
        this.clientServicesHeadcount = page.locator('span', {hasText:('Client Services')})

    }

    async dashboardNavigation(){
        await this.dashboardChapter.click()
    }
}
export default DashboardPage