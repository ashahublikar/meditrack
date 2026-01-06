import { test,expect } from "@playwright/test";
test("window handling",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
 await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
//  let [window2]=await Promise.all([page.waitForEvent('popup'),page.click("//button[text()='Shop Now']")])
//  let [window3]=await Promise.all([page.waitForEvent('popup'),page.click("//button[text()='Shop Now']")])
 let [wins] = await Promise.all([page.waitForEvent('popup'),page.click("//button[text()='Shop Now']")])
 
//  console.log(await window2.url());
//  console.log(await window3.url());
 console.log([wins].length)
 for(let w of [wins]){
    console.log(await w.url())
    
 }
    // await window2.getByText("Add to Cart").click()
    await page.pause()
})