import {test,expect} from "@playwright/test";
test("radio button",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
await page.locator("//input[@id='attended']").click()
// await page.locator("//input[@id='attended']").check()

await page.locator("//input[@id='attended']")

await page.waitForTimeout(2000)
//aserting
 //console.log(await page.locator("//input[@id='attended']").isChecked())
//await expect(await page.locator("//input[@id='attended']")).toBeChecked()
await expect (await page.locator("//input[@id='attended']").isChecked()).toBeFalsy()//negative assertion



})
test.only("checkbox",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    // await page.locator("//input[@id='domain_b']").click()
    //  await page.waitForTimeout(2000)
    //  await page.locator("//input[@id='domain_b']").click()
    //  await page.waitForTimeout(2000)
   await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
   //await page.getByRole("radio", {name: "MALE", exact: true}).click()
    await page.locator("//input[@id='domain_b']").check()
     await page.waitForTimeout(2000)

     //verify checked 
     await expect( page.locator("//input[@id='domain_b']")).toBeChecked()
     await page.locator("//input[@id='domain_b']").uncheck()
     //await expect(page.locator("//input[@id='domain_b']")).toBeChecked()
     await page.waitForTimeout(2000)
      //verify uncheck
      await expect( await page.locator("//input[@id='domain_b']").isChecked()).toBeFalsy()
      await page.waitForTimeout(2000)
    })