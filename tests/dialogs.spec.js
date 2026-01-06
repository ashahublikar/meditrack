import{test,expect} from "@playwright/test"
test("dialogs handling",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
// //await page.locator("//button[@id='alertBtn']")
// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.getByRole("button",{name:'Confirmation Alert'}).click()
// await expect(page.locator("#demo")).toContainText("cancel")
// await page.waitForTimeout(2000)
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// await expect(page.locator("#demo")).toContainText("cancelled")
// await page.waitForTimeout(2000)

//1.page.on-event listener
//page.on("dialog",(dialog)=>{dialog.accept()})
// page.on("dialog",(dialog)=>{dialog.accept("ahfhjj")})
// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.getByRole("button",{name:'Confirmation Alert'}).click()
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// await page.waitForTimeout(2000)


page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
    console.log(await dialog.message());
    
await dialog.accept()
}else if(dialog.type()=='confirm'){await dialog.accept()}
else if(dialog.type()=='prompt'){
    if(dialog.defaultValue()=="tom"){

    console.log(await dialog.defaultValue());}else{
        await dialog.accept("tom")
    }

}})
await page.getByRole("button",{name:'Simple Alert'}).click()
await page.waitForTimeout(2000)
await page.getByRole("button",{name:'Confirmation Alert'}).click()
await page.waitForTimeout(2000)
await expect(page.locator('#demo')).toContainText("OK")
await page.waitForTimeout(2000)
 await page.getByRole("button",{name:'Prompt Alert'}).click()
 await expect(await page.locator('#demo').textContent()).toBe("Hello tom! How are you today?")
 await page.waitForTimeout(2000)
  
})
//page.once-
test.only("dialogs handling using page.once",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole("button",{name:'Simple Alert'}).click()

 await page.getByRole("button",{name:'Confirmation Alert'}).click()
 await page.waitForTimeout(2000)
 page.once("dailog",async(dialog)=>{dialog.accept("asha hublikar")})
  await page.getByRole("button",{name:'Prompt Alert'}).click()
await page.waitForTimeout(2000)
await page.getByRole("button",{name:'Prompt Alert'}).click()
await page.waitForTimeout(2000)
 await page.getByRole("button",{name:'Prompt Alert'}).click()
})
