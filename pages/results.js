// tc1: validate the search results of Iphoen on results screen
// tc2: validated the cart items
// tc3: validate checkout screen 

export class results{
    
    constructor(page){
        this.addToCart =(product) =>  page.locator(`(//span[contains(text(),'${product}')])[1]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']//button[@aria-label='Add to cart']`)
        this.addeditemsCount =  page.locator("#nav-cart-count")
        
    }

    async clickOnAddToCart(item){
        await this.addToCart(item).click()
    }

    async getTheCartItemsCount(){
        let items = await this.addeditemsCount.textContent()
        return items
    }
    
}