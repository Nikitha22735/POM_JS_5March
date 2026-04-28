import {expect, test} from '@playwright/test'
import { Home } from '../pages/home'
import { results } from '../pages/results'

test('adding product to cart', async({page}) =>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(5000)

    const homeObj = new Home(page)
    const resultsObj = new results(page)
    await homeObj.enterTextTosearchBox("iphone")
    await homeObj.clickOnSearchBtn()
    await resultsObj.clickOnAddToCart("iPhone")
    await page.waitForTimeout(3000)
    let count = await resultsObj.getTheCartItemsCount()
    await expect(count).toBe("1")


   
})