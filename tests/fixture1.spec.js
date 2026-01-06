import {test} from "@playwright/test"
test("fixtures",async({browserName,b

























  
})=>{
     await page.goto("https://www.amazon.in/") //launch the url,page is create the tab
   let context= await browser.newContext() 
   let page =await context.newPage() 
await page.goto("https://www.amazon.in/")

})