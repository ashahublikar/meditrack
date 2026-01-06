import {test } from "@playwright/test";
test("shop by category",async({page})=>{

await page.goto("https://www.bigbasket.com/",{waitUntil:"domcontentloaded"})
await page.locator('//button[@id="headlessui-menu-button-:Ramkj6:"]').click()
await page.waitForTimeout(2000)
const categories=await page.locator("//div[contains(@class,'CategoryMenu')]//a")//category menu exist in dom,not visible
  let count=await categories.count()                                             //if u hover over category names,u will find this
 console.log(count);                                                             //any decendent child double //a means

for(let i=0;i<count;i++){
 const categoryName=await categories.nth(i).innerText()

 console.log(categoryName);











 
//  let electronicscategory=await page.locator("//a[.='Electronics']/a")
//  let ecount=await electronicscategory.count()
//  console.log(ecount);

//  for(let i=0;i<ecount;i++){
//  let ename=await electronicscategory.nth(i).innerText()
// console.log(ename);

// }

   }
})