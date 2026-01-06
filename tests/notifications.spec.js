import { test} from "@playwright/test";
test("notifications",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto()
})