class ProfilePage{
    constructor(page){
        this.page = page
        this.prfileDDL = page.locator('.oxd-userdropdown-name')
        this.logoutBtn = page.getByText('Logout')

    }

    async logout(){
        await this.prfileDDL.click()
        await this.logoutBtn.click()
    }
}
export default ProfilePage