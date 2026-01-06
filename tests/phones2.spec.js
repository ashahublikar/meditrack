import {test} from "@playwright/test";
test("Android 13.0",async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@type='text']").click()
    await page.locator("//input[@type='text']").fill("phones")
    await page.locator("//input[@type='text']")
    await page.keyboard.press('Enter')
    //await page.locator("//button[@id's-all-filters-announce']").click()
    await page.locator("//span[.='Android 13.0']/ancestor::a").click()

})