import { test } from "@playwright/test";
import fs from "fs"
//to read single data
let datafile=fs.readFileSync("C:/Users/Asha Hublikar/Desktop/PLAYWRIGHT/testData/singlesetdata.json")             
let data=JSON.parse(datafile)// to convert json object to javascript object

// test("get data from json",async({page})=>{
// //     //console.log(data.greet);
// //     //to read multiple data
// // data.forEach(d => {
// //     console.log(d.greet);
    

//     // data for application for (valid set of data) with single data
// await page.goto(data.url)//data is a object here
// await page.locator("input#username").fill(data.Username)
// await page.locator("input#password").fill(data.Password)
// await page.locator('//button[@class="btn"]').click()
// //await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// //console.log(title);
// if(title=="Logged In Successfully | Practice Test Automation"){

//     console.log("valid credentials");
    
// }else{
//     console.log("invalid Credentials");
    
// }
// //with multiple data

// });
// test.only("multiple set of data",async({page})=>{
// // data.forEach(d=> {
// //     let url=d.url//data is array,d is object
// //      let Username=d.Username
// //      let Password=d.Password
// //   await page.goto()//we cannot use await in for each function bcoz inside we not mention async,no use foreach
// for(let d of data){
//          let url=d.url
//       let User=d.Username
//       let Pwd=d.Password
//       await page.goto(url)
//       await page.locator("input#username").fill(User)
// await page.locator("input#password").fill(Pwd)
// await page.locator('//button[@class="btn"]').click()
// //await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// //console.log(title);
// if(title=="Logged In Successfully | Practice Test Automation"){

//     console.log("valid credentials");
    

// }
// else{
//     console.log("invalid Credentials");
    
// }

// }

// })
test.describe("grouping test",async({page})=> {

let url=data.url
let p=data.password
let u=data.username
test("  ",async({page})=>{
    await page.goto(url)
   
await page.locator("input#password").fill(p)
 await page.locator("input#username").fill(u)
 await page.locator('//button[@class="btn"]').click()
 //await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
 //console.log(title);
if(title=="Logged In Successfully | Practice Test Automation"){

     console.log("valid credentials");
    

 }
 else{
     console.log("invalid Credentials");
    }

})


test("",async({page})=>{
    await page.goto(url)
   
await page.locator("input#password").fill(p)
 await page.locator("input#username").fill(u)
 await page.locator('//button[@class="btn"]').click()
 //await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
 //console.log(title);
if(title=="Logged In Successfully | Practice Test Automation"){

     console.log("valid credentials");
    

 }
 else{
     console.log("invalid Credentials");
    }

})
})