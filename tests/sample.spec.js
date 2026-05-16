import { test, expect } from '@playwright/test'


test.skip('get testcase', async({request})=>{
 const resp =  await request.get(`https://dummyjson.com/products/`)
 const data = await resp.json()
 console.log(await resp.status())
 expect(await resp.status()).toBe(200)
 const title = data.products[0].title
 console.log(title)
 await expect(title).toBe("Essence Mascara Lash Princess")

 const review = data.products[0].reviews[0].reviewerName
 console.log(review)

})

test.skip('get testcase 1', async({request})=>{
  const tokenCMD = process.env.tc
 const token = { Autherization:`Bearer ${tokenCMD}`}
 const basicAuth = { 
        httpCredentails:{
          username:"us",
          pw:"pw"
        }
      }
 const resp =  await request.get("https://dummyjson.com/products", {headers:token})
 const data = await resp.json()
 console.log(await resp.status())
 expect(await resp.status()).toBe(200)
 const title = data.products[0].title
 console.log(title)
 await expect(title).toBe("Essence Mascara Lash Princess")

 const review = data.products[0].reviews[0].reviewerName
 console.log(review)

})


test.skip('post tc', async({request})=>{
  const requestBody = {
  "title": "Gaming Chair",
  "price": 299.99,
  "brand": "DXRacer"
 }

  const token = { Autherization:`Bearer 12345`}
   const resp = await request.post("https://dummyjson.com/products/add", {data: requestBody,  headers:{Autherization:token, 'content-Type':"applicantion/json"}})
   expect(await resp.status()).toBe(201)
    const data = await resp.json()
    console.log(data)
})

// mocking and routing the api servers

test.skip('mock the get', async({page})=>{

  await page.route("https://dummyjson.com/products", async(route)=>{
    const mockResponse = {
      products:[{
        title: "My mocked product",
        price: 9.99
      }]
    }

    await route.fulfill({
      status:200,
      body: JSON.stringify(mockResponse)
    })
  })

  const data = await page.evaluate(async() =>{
    const resp = await fetch("https://dummyjson.com/products")
    return resp.json()
  })

  console.log(data)

})



test.skip('mock the post', async({page})=>{

  await page.route("https://dummyjson.com/products/add", async(route)=>{
    const reqBody = route.request().postDataJSON()
    const mockResponse ={
        "id": 195,
        "title": reqBody.title,
        "price": reqBody.price,
        "brand": "DXRacer"
    }

    await route.fulfill({
      status:200,
      body: JSON.stringify(mockResponse)
    })
  })

  const data = await page.evaluate(async() =>{
    const reqBody = {
    "title": "iphone",
    "price": 1299.99,
    "brand": "DXRacer"
  }
    const resp = await fetch("https://dummyjson.com/products/add", {method: "POST", body:JSON.stringify(reqBody), headers:{id:195}})
    return resp.json()
  })

  console.log(data)

})




test.skip('test', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.waitForTimeout(3000)
  // await page.locator('body').click();
  await page.locator('#txtDate').click();
  await page.locator("button.submit-btn").click({force:true});
});


test("new", async({page})=>{
  await page.goto("https://www.leafground.com/frame.xhtml?utm_source=chatgpt.com")
  await page.waitForTimeout(3000)
  await page.frameLocator('[src="default.xhtml"]').locator('(//button[@onclick="change()"])[1]').click()
})







