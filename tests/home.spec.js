import {test, expect} from '@playwright/test'
import {Home} from '../pages/home.js'

// test.describe.configure({mode: 'serial'})
// test.use({browserName:'firefox'})
test.describe('validating Home Screen Elements', ()=>{
   

    test.only('validate navigation to the Homescreen and validting the UI', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000)
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.validateTheVisibilityOfaccountsAndList()
        await homeObjs.validateTheVisibilityOfamazonLogo()
        await homeObjs.validateTheVisibilityOfcartBtn()
        await homeObjs.validateTheVisibilityOfreturnsAndOrders()



    })

    test('validating accounts and list', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000) 
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.hoverOnAccountsAndList()
        await homeObjs.validateTheAvailabilityOfSignInBtn()
    })
     test('validate navigation to the Homescreen and validting the UI1', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000)
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.validateTheVisibilityOfaccountsAndList()
        await homeObjs.validateTheVisibilityOfamazonLogo()
        await homeObjs.validateTheVisibilityOfcartBtn()
        await homeObjs.validateTheVisibilityOfreturnsAndOrders()



    })
     test('validate navigation to the Homescreen and validting the UI2', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000)
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.validateTheVisibilityOfaccountsAndList()
        await homeObjs.validateTheVisibilityOfamazonLogo()
        await homeObjs.validateTheVisibilityOfcartBtn()
        await homeObjs.validateTheVisibilityOfreturnsAndOrders()



    })
     test('validate navigation to the Homescreen and validting the UI3', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000)
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.validateTheVisibilityOfaccountsAndList()
        await homeObjs.validateTheVisibilityOfamazonLogo()
        await homeObjs.validateTheVisibilityOfcartBtn()
        await homeObjs.validateTheVisibilityOfreturnsAndOrders()



    })
})