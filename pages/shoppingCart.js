import { expect } from '@playwright/test'

export class shoppingCart{
    constructor(page){
        this.productName = (product)=>page.locator(`//ul[@data-name='Active Items']//span[contains(text(),'${product}') and @class='a-truncate-cut']`)
    }

    async validateTheVisibilityOfAddedProduct(item){
        await expect(this.productName(item)).toBeVisible()
        
    }
}



//ul[@data-name='Active Items']


//tagname[@attribut=val]
//tagname[test()=val]
//tagname[contains(@attribut,val)]
//tagname[contains(text(),val)]

// tagname[attribut=val]