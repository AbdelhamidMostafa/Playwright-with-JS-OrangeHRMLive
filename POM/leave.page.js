class LeaveManagementPage{
    constructor(page){
        this.page = page
        this.leaveChapter = page.getByRole('link', {name:'Leave'})
        this.applyLeaveTap = page.getByText('Apply')

    }

    async leaveNavigation(){
        await this.leaveChapter.click()
    }
}
export default LeaveManagementPage