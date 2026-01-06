//page.setviewportsize()
import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//  await page.setViewportSize({width:1000,height:500})
    
// })

//page.viewportsize()
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//  await page.setViewportSize({width:1000,height:500})
//     let size=await page.viewportSize()
//     console.log(size);
    
// })
//second example for viewportSize

// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     let size1=await page.viewportSize()
//     console.log(size1);
    
//  await page.setViewportSize({width:1000,height:500})
//     let size=await page.viewportSize()
//     console.log(size);
    
// })
//page title
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com") 
//     let title1=await page.title()
//     console.log(title1);
    
//     await page.goto("https://www.amazon.in/")
//     let title =await page.title()
//     //console.log(await page.title());
//     console.log(title);
    
//})

//page.url
test("browser controls",async({page})=>{
    await page.goto("https://www.google.com") 
    console.log(await page.title())
    console.log(await page.url())
    
    await page.goto("https://www.amazon.in/")
   // let title =await page.title()
    console.log(await page.title());
    console.log(await page.url);
})
    
 
    



