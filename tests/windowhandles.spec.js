import { test,expect } from "@playwright/test";
test("window handles",async({browser})=>{
let context=await browser.newContext()
// let page1=await context.newPage()
// await page1.goto("https://www.flipkart.com/")
// let page2=await context.newPage()
// await page2.goto("https://www.amazon.in/")


//opening new tab via user actions
let page=await context.newPage()
await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
await page.click("(//a[@class='atJtCj'])[1]")
await page.waitForTimeout(3000)
console.log(await page.url())

await page.goto("https://www.redbus.in/")
let p2 = await Promise.all([page.waitForEvent('popup'), page.click("//a[text()='Contact us']")])
// await 
await page.waitForTimeout(3000)

await page.click("//span[text()='Account']")
 })
//handling multile tabs
test.only("multiple tabs",async({browser})=>{
// let context= await browser.newContext()
// let page= await context.newPage()
// await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off", {waitUntil: "load", timeout:100000})
//  let [page2]=await Promise.all([
//  page.waitForEvent('popup'),
//  page.click("(//a[@class='atJtCj'])[1]")])
 
// console.log(await page2.url());
// await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",{waitUntil: "load", timeout:100000})
     let context=await browser.newContext()
let page=await context.newPage()
     await page.goto("https://www.redbus.in/")
      let [page2]= await Promise.all([page.waitForEvent('popup'),
      page.click("//span[text()='Contact us']")])
      await page2.click('#account-dd')
})


