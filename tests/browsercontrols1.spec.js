//context cookies
 
//  import {test} from "@playwright/test"
// test("browser controls",async({browser})=>{


//     let context=await browser.newContext()
//     let page = await context.newPage()
//     console.log(await context.cookies());
//     await page.goto("https://www.google.com")
//     console.log(await context.cookies());
    
    
// })

// //chromium launch
// import {chromium,test} from "@playwright/test"
// test.only("instance",async({})=>{

//     let browser=await chromium.launch()

//     let context=await browser.newContext()
//     let page = await context.newPage()
    
//     await page.goto("https://www.google.com")
    
    
    
// })
// for chromium

import {firefox,test} from "@playwright/test"
test.only("instance",async({})=>{

    let browser=await firefox.launch()

    let context=await browser.newContext()
    let page = await context.newPage()
    
    await page.goto("https://www.google.com")
    
    
    
})