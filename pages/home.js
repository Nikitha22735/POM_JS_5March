import { expect } from "@playwright/test"

export class Home{
    
    constructor(page){
        this.searchBox = page.locator("input#twotabsearchtextbox")
        this.amazonLogo = page.locator("#nav-logo-sprites")
        this.accountsAndList = page.locator("//span[contains(text(),'Account & Lists')]")
        this.returnsAndOrders = page.locator("#nav-orders")
        this.cartBtn = page.locator("#nav-cart-text-container")
        this.signInBtn = page.locator("//span[contains(text(),'Sign in') and @class='nav-action-inner']")
    }

    // async variables(){
    //     const searchBox = page.locator("input#twotabsearchtextbox")
    // }

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
        await this.accountsAndList.hover()
    }

    async validateTheAvailabilityOfSignInBtn(){
        await expect(this.signInBtn).toBeVisible()
    }

       
}