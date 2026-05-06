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



test('post', async({request})=>{
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