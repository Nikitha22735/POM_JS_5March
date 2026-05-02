import { test, expect } from '@playwright/test'
import { Login } from '../pages/login.js'
import {Home} from '../pages/home.js'
import fs from 'fs';

const filePath = "testData/creds.json"
// const data = JSON.parse(fs.readFileSync(filePath,'utf-8'))
// const data = fs.readFileSync(filePath,'utf-8')

test.describe('Amazon Login Tests', () => {

    // test('validate complete login flow and search functionality', async ({ page }) => {
    //     const loginObjs = new Login(page)
    //     const homeObjs = new Home(page)
        
    //     // Navigate to Amazon
    //     await loginObjs.navigateToAmazon()
    //     await page.waitForTimeout(2000)
        
    //     // Click on Sign In link
    //     await homeObjs.hoverOnAccountsAndList()
    //     await page.waitForTimeout(2000)
        
    //     // Fill email and continue
    //     await loginObjs.fillEmailOrMobile('trainingplaywright@gmail.com')
    //     await loginObjs.clickContinueBtn()
    //     await page.waitForTimeout(3000)
        
    //     // Fill password and sign in
    //     await loginObjs.fillPassword("Welcome@04")
    //     await loginObjs.clickSignInBtn()       
    //     await page.waitForTimeout(3000)
    // })
    
    test.only('validate search and filter functionality', async ({ page }) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        // Navigate and perform login
        await loginObjs.navigateToAmazon()
        // await page.waitForTimeout(2000)
        // await homeObjs.hoverOnAccountsAndList()

        // // await loginObjs.clickSignInLink()
        // await page.waitForTimeout(2000)
        // await loginObjs.fillEmailOrMobile('trainingplaywright@gmail.com')
        // await loginObjs.clickContinueBtn()
        // await page.waitForTimeout(2000)
        // await loginObjs.fillPassword('Welcome@04')
        // await page.waitForTimeout(2000)
        // await loginObjs.clickSignInBtn()


        // await loginObjs.clickSignInBtn()
        await page.waitForTimeout(3000)
        
        // Search for iPhone
        await loginObjs.clickSearchBox()
        await loginObjs.fillSearchBox('iphone')
        await page.waitForTimeout(2000)
        
        // Validate results
        await loginObjs.validateResultsHeadingIsVisible()
        
        // Apply Apple filter
        await loginObjs.clickApplyFilter()
        await page.waitForTimeout(1000)
        await loginObjs.clickAppleFilter()
        await page.waitForTimeout(2000)
        
        // Validate final results
        await loginObjs.validateResultsHeadingIsVisible()
    })

})

test.describe('Amazon Login - Negative Scenarios', () => {

    test('validate login with invalid email format', async ({ page }) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await homeObjs.hoverOnAccountsAndList()
        // await loginObjs.clickSignInLink()
        await page.waitForTimeout(2000)
        
        // Enter invalid email format
        await loginObjs.fillEmailOrMobile('invalidemail@')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Verify error message or continue button behavior
        const errorMsg = await page.locator("#invalid-email-alert").isVisible()
        expect(errorMsg).toBeTruthy()
    })

    test('validate login with non-existent email', async ({ page }) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await homeObjs.hoverOnAccountsAndList()
        // await loginObjs.clickSignInLink()
        await page.waitForTimeout(2000)
        
        // Enter non-existent email
        await loginObjs.fillEmailOrMobile('nonexistent.user.12345@gmail.com')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(3000)
        
        // Verify error message appears
        const errorMsg = await page.locator("#intent-confirmation-container").isVisible()
        expect(errorMsg).toBeTruthy()
    })

    test('validate login with empty email field', async ({ page }) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await homeObjs.hoverOnAccountsAndList()
        // await loginObjs.clickSignInLink()
        await page.waitForTimeout(2000)
        
        // Try to click continue without entering email
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Verify that an error message appears or form doesn't submit
        const errorMsg = await page.locator("#empty-claim-alert").isVisible()
        expect(errorMsg).toBeTruthy()
    })

    test('validate login with wrong password', async ({ page }) => {
        const loginObjs = new Login(page)
        const homeObjs = new Home(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await homeObjs.hoverOnAccountsAndList()
        // await loginObjs.clickSignInLink()
        await page.waitForTimeout(2000)
        
        // Enter valid email
        await loginObjs.fillEmailOrMobile('trainingplaywright@gmail.com')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Enter wrong password
        await loginObjs.fillPassword('WrongPassword123')
         await page.waitForTimeout(2000)
        await loginObjs.clickSignInBtn()

        await page.waitForTimeout(2000)
        
        // Verify error message for incorrect password
        // const errorMsg = await page.locator("//span[contains(text(),'password')]|//div[contains(text(),'incorrect')]").isVisible()
        // expect(errorMsg).toBeTruthy()
    })

    test('validate login with empty password field', async ({ page }) => {
        const loginObjs = new Login(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await page.hoverOnAccountsAndList()
        // await loginObjs.clickSignInLink()
        await page.waitForTimeout(2000)
        
        // Enter valid email
        await loginObjs.fillEmailOrMobile('trainingplaywright@gmail.com')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Try to sign in without entering password
        // await loginObjs.clickSignInBtn()
        await page.waitForTimeout(2000)
        
        // Verify error message appears
        // const errorMsg = await page.locator("//span[@class='a-list-item']|//div[contains(text(),'required')]").isVisible()
        // expect(errorMsg).toBeTruthy()
    })

    test('validate login with email containing spaces', async ({ page }) => {
        const loginObjs = new Login(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await loginObjs.hoverOnAccountsAndList()
        await page.waitForTimeout(2000)
        
        // Enter email with spaces
        await loginObjs.fillEmailOrMobile('  trainingplaywright@gmail.com  ')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Verify behavior - Amazon should handle this gracefully
        // const emailField = await page.locator("//input[@aria-label='Enter mobile number or email']").inputValue()
        // expect(emailField.trim()).toBe('trainingplaywright@gmail.com'.trim())
    })

    test('validate login with special characters in email', async ({ page }) => {
        const loginObjs = new Login(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await loginObjs.hoverOnAccountsAndList()
        await page.waitForTimeout(2000)
        
        // Enter email with special characters
        await loginObjs.fillEmailOrMobile('test@@@@@gmail.com')
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Verify error message or invalid format error
        // const errorMsg = await page.locator("//div[@class='a-box-inner']|//span[contains(text(),'valid')]").isVisible()
        // expect(errorMsg).toBeTruthy()
    })

    test('validate login with very long email input', async ({ page }) => {
        const loginObjs = new Login(page)
        
        await loginObjs.navigateToAmazon()
        await page.waitForTimeout(2000)
        await loginObjs.hoverOnAccountsAndList()
        await page.waitForTimeout(2000)
        
        // Enter very long email
        const longEmail = 'a'.repeat(250) + '@gmail.com'
        await loginObjs.fillEmailOrMobile(longEmail)
        await loginObjs.clickContinueBtn()
        await page.waitForTimeout(2000)
        
        // Verify error handling for long input
        const errorMsg = await page.locator("//div[@class='a-box-inner']").isVisible()
        expect(errorMsg).toBeTruthy()
    })

    

})