import {test} from "@playwright/test";
test("Cart",async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator("//a[contains(@href,'/viewcart?marketplace')]")
    await page.waitForTimeout(2000)
    await page.keyboard.press('Enter')
})
    