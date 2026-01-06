import {test,expect } from "@playwright/test";
test("assertions",async({page})=>{

//1.tobevisible
   // await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//await expect (page.locator("//section[@class='poppins text-[14px]']").first()).toBeVisible()

//2.tobehidden
// await page.locator("//section[.='Text Field']").
//await page.waitForTimeout(2000)
//await expect(page.locator("//section[.='Text Field']")).toBeHidden()

//3.tobeenabled
//await page.goto("https://demoapps.qspiders.com/ui/toggle?sublist=0")
//await expect(page.locator("//section[@class='poppins text-[14px]']").first()).toBeEnabled()

//4.tobedisabled

await expect(page.locator("//a[@href='/ui/login']")).toBeDisabled()
//5.tobechecked
await expect(page.locator("//section[.='Text Field']")).toBeChecked()
})