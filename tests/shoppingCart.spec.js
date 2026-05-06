import { test, expect } from '@playwright/test'
import { Hom } from '../pages/home'
import { results } from '../pages/results'
import { shoppingCart } from '../pages/shoppingCart'


test.describe('@shoppingCart validating Shopping cart', async() =>{
    test.use({storageState:[]})
    test('validate added item in the cart',{tag:['@smoke','@regression']}, async({page})=>{
        await page.goto("https://www.amazon.in/")

        const homePageObj = new Home(page)
        const resultsObj = new results(page)
        const shoppingCartObj = new shoppingCart(page)
        await homePageObj.searchAProduct("iphone 17 pro")
        // await homePageObj.enterTextTosearchBox("iphone 17 pro")
        // await homePageObj.clickOnSearchBtn()
        await page.waitForLoadState('networkidle', {timeout:50000})
        // await page.waitForResponse()
        await page.waitForTimeout(5000)
        let itemsBeforAddingToCart = await resultsObj.getTheCartItemsCount()
        await resultsObj.clickOnAddToCart('iPhone 17 Pro')
        await page.waitForTimeout(3000)
        let itemsAfterAddingToCart = await resultsObj.getTheCartItemsCount()
        await expect(itemsAfterAddingToCart).toBeGreaterThan(itemsBeforAddingToCart)

        await resultsObj.clickOncartIcon()
        await page.waitForTimeout(5000)
        await shoppingCartObj.validateTheVisibilityOfAddedProduct('iPhone 17 Pro')

    })
})