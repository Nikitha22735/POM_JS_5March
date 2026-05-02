import {test, expect, devices} from '@playwright/test'
import {Home} from '../pages/home.js'

// test.describe.configure({mode: 'parallel'})
// test.use({browserName:'firefox', viewport:{width:120, height:700}})
// test.use({browserName:'firefox',...devices['iPhone XR']})
//  test.use({launchOptions:{slowMo:3000}})
test.describe('@home @smoke validating Home Screen Elements', ()=>{
   
    // test.use({viewport:{width:120, height:700}})
    test('validate navigation to the Homescreen and validting the UI',{tag:['@smoke1']}, async({page})=>{
        // await page.setViewportSize({width:120, height:700})
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000)
        const homeObjs = new Home(page)
        await page.pause()
        // await page.locator("input#twotabsearchtextbox").type("iphone", {delay:3000})
        await homeObjs.validateTheVisibilityOfSearchBox()
        await homeObjs.validateTheVisibilityOfaccountsAndList()
        await homeObjs.validateTheVisibilityOfamazonLogo()
        await homeObjs.validateTheVisibilityOfcartBtn()
        await page.setViewportSize({width:120, height:700})
        await homeObjs.validateTheVisibilityOfreturnsAndOrders()



    })

    test('validating accounts and list', async({page})=>{
        await page.goto("https://www.amazon.in/")
        await page.waitForTimeout(5000) 
        const homeObjs = new Home(page)
        await homeObjs.validateTheVisibilityOfSearchBox()
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