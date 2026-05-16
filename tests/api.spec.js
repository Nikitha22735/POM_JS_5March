import { test, expect } from '@playwright/test'

test.skip('get tstcase', async({request})=>{
    const token = {Authorization:"Bearer 12345"}
    const creds = {httpCredentials:{"username":"us",pw:"pw"}}
    // const resp = await request.get("https://dummyjson.com/products", {headers:token})
    const resp = await request.get("https://dummyjson.com/products", {headers:creds})
    console.log(await resp.status())
    const data = await resp.json() 
    console.log(data.products[0])

    expect(await resp.status()).toBe(200)
    const title = data.products[0].title
    expect(title).toBe('Essence Mascara Lash Princess')
})



test.skip('post', async({request})=>{
    const tokenres = await request.get("tokenURl")
    const tkone = await tokenres.json().token

    const token = {Authorization:"Bearer 12345"}
    const requestBody = {
  "title": "Gaming Chair",
  "price": 299.99,
  "brand": "DXRacer"
 }
    const resp = await request.post("https://dummyjson.com/products/add",{headers:token, data:requestBody} )
    console.log(resp)
    console.log(await resp.status())
    const data = await resp.json()

})


test.skip('visual testing', async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.screenshot({path: "screenshot.png"}, {fullPage:true})
    await expect(page).toHaveScreenshot("screenshot.png", {fullPage:true, mask:[page.locator('//img[@referrerpolicy="origin-when-cross-origin"]')]})
})


test.skip('visual testing 1', async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
    // await page.locator('//div[@aria-label="Log in"]').screenshot({path: "loginBtn.png"})
    // await page.screenshot({path: "loginBtn_1.png"}) 
    await expect(page.locator('//div[@aria-label="Log in"]')).toHaveScreenshot("loginBtn.png")
})


// npm install -D allure-playwright

test.skip("testing 11", async({page})=>{
   
    await page.goto("https://demo.automationtesting.in/Frames.html")
//      const responsePromise = page.waitForResponse(
//   response => 
//     response.url().includes('https://demo.automationtesting.in/Frames.html') &&
//     response.status() === 200,
//    { timeout: 10000 } // 10 seconds timeout
//     );
    await page.frameLocator("//iframe[@id='singleframe']").locator('(//div[@class="container"]//*[@type="text"])[1]').fill("admin")
})



test("handle multiple windows", async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");


    await page.click("#PopUp");

    await page.waitForTimeout(3000);

    // capture all pages
    const allPages = context.pages();

    console.log("Total Pages:", allPages.length);

    const firstWindow = allPages[1];

    const secondWindow = allPages[2];

    await firstWindow.bringToFront();
    console.log(await firstWindow.title());

    await secondWindow.bringToFront();
    console.log(await secondWindow.title());

});


// import { test, expect } from '@playwright/test';

test('Validate response time from UI action', async ({ page }) => {

    // Open Website
    await page.goto('https://www.demoblaze.com/');

    // Start Time
    const startTime = Date.now();

    // Wait for API Response
    const responsePromise = page.waitForResponse(response =>
        response.url().includes('entries') &&
        response.status() === 200
    );

    // Perform UI Action
    await page.click('text=Samsung galaxy s6');

    // Capture Response
    // const response = await responsePromise;

    // End Time
    

});