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



// import { test, expect } from '@playwright/test';

test.skip('get testcase with routing (mocked API)', async ({ page }) => {

  // Mock API response
  await page.route('https://dummyjson.com/products/', async (route) => {
    const mockResponse = {
      products: [
        {
          title: "Essence Mascara Lash Princess testing 123",
          reviews: [
            {
              reviewerName: "John Doe"
            }
          ]
        }
      ]
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockResponse)
    });
  });

  // Trigger API call via browser context
   // Trigger from browser context
  const data = await page.evaluate(async () => {
    const res = await fetch('https://dummyjson.com/products/');
    return await res.json();
  });
  // const data = await page.goto("https://dummyjson.com/products/")
  // const data2 = await data.json()

  // const title = data.products[0].title;
  console.log(data2);
  // console.log(review);
});


test.skip('get testcase with routing (mocked API) 11', async ({ page }) => {

  await page.route('https://dummyjson.com/products/', async (route) => {
    const response = await route.fetch(); // real API call
    const data = await response.json();

    data.products[0].title = "Modified Title";

    await route.fulfill({
      response,
      body: JSON.stringify(data)
    });
    console.log(data)
  });
  const resp = await page.request.get('https://dummyjson.com/products/');

  const data = await resp.json();

  console.log(await resp.status());
  expect(await resp.status()).toBe(200);

  const title = data.products[0].title;
  console.log(title);
  await expect(title).toBe("Essence Mascara Lash Princess");

  const review = data.products[0].reviews[0].reviewerName;
  console.log(review);
  });





test.skip('post testcase with routing (mocked API)', async ({ page }) => {

  // Mock API response
  await page.route('https://dummyjson.com/products/', async (route) => {
    const requestBody = route.request().postDataJSON();
     const mockResponse = {
        id: 101,
        title: requestBody.title,
        message: "Product created successfully"
      };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockResponse)
    });
  });

  // Trigger API call via browser context
   // Trigger from browser context
  const data = await page.evaluate(async () => {
    const res = await fetch('https://dummyjson.com/products/', { method: 'POST',
      body: JSON.stringify({
        title: "Essence Mascara Lash Princess testing 123"
      })
    });
    return await res.json();
  });

  console.log(data);
  // console.log(review);
});



test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000)
  await page.locator('#datepicker').click();
  // await page.locator('#datepicker').click();
  // await page.getByRole('link', { name: '6', exact: true }).click();
  await page.getByPlaceholder('End Date').fill('2926-05-06');
  await page.locator("button.submit-btn").click({force:true})
   await page.waitForTimeout(5000)
});

