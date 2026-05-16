import { test as setup, expect, firefox } from '@playwright/test'
import { Login } from '../pages/login'
import { Home } from '../pages/home'
import dotenv from 'dotenv'

const authFile = 'testData/cookies.json'

dotenv.config({path: `./.env.${process.env.ENVIRONMENT}`})
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
        await loginObjs.fillEmailOrMobile(process.env.username)
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(3000)
        
        // Fill password and sign in
        await loginObjs.fillPassword(process.env.password)
        await loginObjs.clickSignInBtn()       
        await page.waitForTimeout(3000)

        await page.context().storageState({path: authFile})
    })