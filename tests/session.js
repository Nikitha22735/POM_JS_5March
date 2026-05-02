import { test as setup, expect, firefox } from '@playwright/test'
import { Login } from '../pages/login'
import { Home } from '../pages/home'

const authFile = 'testData/cookies.json'
setup.use({browserName: process.env.browsern})
setup('authenticator', async ({page}) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        // Navigate to Amazon
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        
        // Click on Sign In link
        await homeObjs.hoverOnAccountsAndList()
        await page.waitForTimeout(2000)
        
        // Fill email and continue
        await loginObjs.fillEmailOrMobile('trainingplaywright@gmail.com')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(3000)
        
        // Fill password and sign in
        await loginObjs.fillPassword("Welcome@04")
        await loginObjs.clickSignInBtn()       
        await page.waitForTimeout(3000)

        await page.context().storageState({path: authFile})
    })