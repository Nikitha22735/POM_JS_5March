import { expect } from "@playwright/test"

export class Login{
    
    constructor(page){
        this.page = page
        this.signInLink = page.getByRole('link', { name: 'Sign in', exact: true })
        this.emailInput = page.getByRole('textbox', { name: 'Enter mobile number or email' })
        this.continueBtn = page.getByRole('button', { name: 'Continue' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.signInBtn = page.getByRole('button', { name: 'Sign in' })
        this.signOutLink = page.getByRole('link', { name: 'Sign Out' })
        this.accountLink = page.getByRole('link', { name: 'Hello, Playwright Account &' })
        this.megaDealDaysLink = page.getByRole('link', { name: 'Mega Deal Days' })
        this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' })
        this.resultsHeading = page.getByRole('heading', { name: 'Results', exact: true })
        this.appleFilter = page.getByText('Apple', { exact: true }).nth(2)
        this.appliedFilterBtn = page.locator('#a-autoid-3-announce')
    }

    async navigateToAmazon(){
        await this.page.goto("https://www.amazon.in/")
    }

    async clickSignInLink(){
        await this.signInLink.click()
    }

    async fillEmailOrMobile(email){
        await this.emailInput.click()
        await this.emailInput.fill(email)
    }

    async clickContinueBtn(){
        await this.continueBtn.dblclick()
    }

    async fillPassword(password){
        await this.passwordInput.fill(password)
    }

    async clickSignInBtn(){
        await this.signInBtn.click()
    }

    async validateSignOutLinkIsVisible(){
        await expect(this.signOutLink).toBeVisible()
    }

    async validateAccountLinkIsVisible(){
        await expect(this.accountLink).toBeVisible()
    }

    async clickMegaDealDaysLink(){
        await this.megaDealDaysLink.click()
    }

    async clickSearchBox(){
        await this.searchBox.click()
    }

    async fillSearchBox(searchTerm){
        await this.searchBox.fill(searchTerm)
    }

    async validateResultsHeadingIsVisible(){
        await expect(this.resultsHeading).toBeVisible()
    }

    async clickApplyFilter(){
        await this.appliedFilterBtn.click()
    }

    async clickAppleFilter(){
        await this.appleFilter.click()
    }

    async clickResultsHeading(){
        await this.resultsHeading.click()
    }

    async performCompleteLoginFlow(email, password){
        await this.navigateToAmazon()
        await this.clickSignInLink()
        await this.fillEmailOrMobile(email)
        await this.clickContinueBtn()
        await this.fillPassword(password)
        await this.clickSignInBtn()
    }

    // Error validation methods for negative scenarios
    async getEmailErrorMessage(){
        return await this.page.locator("//div[@class='a-box-inner']/div").textContent()
    }

    async getPasswordErrorMessage(){
        return await this.page.locator("//span[contains(text(),'There is a problem')]").textContent()
    }

    async validateEmailFieldError(){
        const errorLocator = this.page.locator("//div[contains(text(),'Enter a valid email address or mobile number')]")
        await expect(errorLocator).toBeVisible()
    }

    async validatePasswordFieldError(){
        const errorLocator = this.page.locator("//span[contains(text(),'Your password is incorrect')]")
        await expect(errorLocator).toBeVisible()
    }

    async validateAccountLockedError(){
        const errorLocator = this.page.locator("//span[contains(text(),'Your account')]")
        await expect(errorLocator).toBeVisible()
    }

    async validateEmptyFieldError(){
        const errorLocator = this.page.locator("//span[@class='a-list-item']")
        await expect(errorLocator).toBeVisible()
    }

    async isContinueBtnDisabled(){
        return await this.continueBtn.isDisabled()
    }

    async isSignInBtnDisabled(){
        return await this.signInBtn.isDisabled()
    }

    async clearEmailField(){
        await this.emailInput.clear()
    }

    async clearPasswordField(){
        await this.passwordInput.clear()
    }

}
