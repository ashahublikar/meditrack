import {  test,expect} from "@playwright/test";
test("all checkbox",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
let checkboxes= await page.locator("//input[@type='checkbox']")
await page.waitForTimeout(3000)
// console.log(checkboxes)
//let count=await checkboxes.count()
//console.log(count);

 for(let i=0;i<10;i++){

    await checkboxes.nth(i).check()
 }

await page.waitForTimeout(3000)


})