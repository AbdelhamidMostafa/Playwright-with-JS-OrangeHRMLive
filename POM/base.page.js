class BasePage {
    constructor(page){
        this.page= page
        this.baseUrl = "https://opensource-demo.orangehrmlive.com/"
    }

    async navigate(path){
        await this.page.goto(`${this.baseUrl}/${path}`)
    }
}

export default BasePage