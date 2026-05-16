import { expect, Locator } from "@playwright/test"

dotenv.config({path: `./.env.${process.env.ENVIRONMENT}`})
export class  Home{
    // searchBox: Locator
    constructor(page){
        // this.searchBox = page.locator("input#twotabsearchtextbox")
         this.searchBox = page.locator(process.env.searchBoxLocator)
        this.searchicon = page.locator("#nav-search-submit-button")
        this.amazonLogo = page.locator("#nav-logo-sprites")
        this.accountsAndList = page.locator("//span[contains(text(),'Account & Lists')]")
        this.returnsAndOrders = page.locator("#nav-orders")
        this.cartBtn = page.locator("#nav-cart-text-container")
        this.signInBtn = page.locator("//span[contains(text(),'Sign in') and @class='nav-action-inner']")
    }

    async enterTextTosearchBox(text){
        await this.searchBox.fill(text)
    }
    async clickOnSearchBtn(){
        await this.searchicon.click()
    }

    async searchAProduct(text){
        await this.enterTextTosearchBox(text)
        await this.clickOnSearchBtn()
    }
    async validateTheVisibilityOfSearchBox(){
        await expect(this.searchBox).not.toBeVisible()
    }
      async validateTheVisibilityOfamazonLogo(){
        await expect(this.amazonLogo).toBeVisible()
    }
      async validateTheVisibilityOfaccountsAndList(){
        await expect(this.accountsAndList).toBeVisible()
    }
      async validateTheVisibilityOfreturnsAndOrders(){
        await expect(this.returnsAndOrders).toBeVisible()
    }
      async validateTheVisibilityOfcartBtn(){
        await expect(this.cartBtn).toBeVisible()
    }

    async hoverOnAccountsAndList(){
        await this.accountsAndList.click()
    }

    async validateTheAvailabilityOfSignInBtn(){
         await this.accountsAndList.click()
        await expect(this.signInBtn).toBeVisible()
    }

       
}