
import { test, expect } from '@playwright/test'
import fs from 'fs';
import { parse } from 'csv-parse/sync'
import dotenv from 'dotenv'
// import { getCSVData } from '../utils/csvHandling'


// const filePath = "testData/creds.json"
const filePathCSV = "testData/creds_csv.csv"
// const data = JSON.parse(fs.readFileSync(filePath,'utf-8'))

// ////////////////////////////////////json////////////////////////////////
// test("json", async() => {
//     console.log(data)
//     console.log(data.username1)
//     console.log(data.creds.us1)
// })


// /////////////////////////////////////CLI//////////////////////////////////////////////////
// test("commandLine", async() => {
//     const username = process.env.usn
//     const pw = process.env.psw
//     const url =process.env.url
//     console.log(username)
//     console.log(pw)
//     console.log(url)

// })

// ////////////////////////////////////////////////////Arrays/////////////////////////////////////////////
// const arr =[["us1","pw1","success"],["us2","pw2","unsuccess"], ["us3","pw3","unsuccess"]]
// // a = "hello"
// for (let i=0; i < arr.length; i++){
// test(`data parameterisation ${i}`, async()=>{
//     console.log(arr[i][0])
//     console.log(arr[i][1])
//     console.log(arr[i][2])
//     console.log("===============================")

// })

// }

// /////////////////method2////////////////////////
// for (let i of arr){
// test(`data parameterisation ${i}`, async()=>{
//     console.log(i[0])
//     console.log(i[1])
//     console.log(i[2])
//     console.log("===============================")

// })

// };

// /////////////////method3////////////////////////

// arr.forEach(i => {
//     test("data parameterisation" + i, async()=>{
//     console.log(i[0])
//     console.log(i[1])
//     console.log(i[2])
//     console.log("===============================")

// });
// })


// //////////////////////////// csv //////////////////////////////////////

// npm install csv-parse


// test('csv reading', async()=> {
//     const file = "testData/creds_csv.csv"
//     const data = fs.readFileSync(file,'utf-8')

//     const csvData = parse(data, {columns:true, skip_empty_lines: true})
//     console.log(csvData[0].username)
//     // console.log(csvData[0].username)

// })


// test('csv from imported file', async()=>{
//     const file = "testData/creds_csv.csv"
//     const csvData = getCSVData(file)
//     console.log(csvData)

// })



// ////////////////////////////////excel////////////////////////////////////////
// npm install xlsx
// import XLSX from 'xlsx'
// test('excel handling', async()=>{
//     const excelFilePath = "testData/creds_xm.xlsx"
//     const workBook = XLSX.readFile(excelFilePath)
//     const sheet = workBook.Sheets["Sheet1"];

//     const excelData = XLSX.utils.sheet_to_json(sheet)
//     console.log(excelData)
// })




/////////////////////////////////dotenv/////////////////////////////
// npm install dotenv
test("commandLine", async() => {
    // dotenv.config({path:"./.env.test"})
    dotenv.config({path: `./.env.${process.env.ENVIRONMENT}`})
    const username = process.env.username
    const pw = process.env.password
    const url =process.env.url
    console.log(username)
    console.log(pw)
    console.log(url)

})