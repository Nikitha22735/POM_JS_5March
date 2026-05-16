import { test, expect } from '@playwright/test'
import {faker} from '@faker-js/faker'


test.skip('frames', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.waitForSelector('//a[@href="#Single"]', {state:'visible'})
    await page.frameLocator("#singleframe").locator('//input[@type="text"]').first().fill('testing')
    await page.waitForTimeout(3000)

})


//npm install @faker-js/faker
test('faker', async({page})=>{
    // generateRandomData
     const firstName =  faker.person.firstName()
     console.log(faker.internet.exampleEmail())
     console.log(firstName)

})


test.skip('waiting for api', async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.waitForResponse(response => response.url().includes('/entries') && response.status()==200)
    await page.getByText("Monitors").click()
    await page.waitForTimeout(3000)
})