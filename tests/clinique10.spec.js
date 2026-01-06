import {test} from "@playwright/test";
test("bag icon",async({page})=>{

    await page.goto("https://in.search.yahoo.com/search?fr=mcafee&type=E210IN714G0&p=clinique+website")
    await page.locator("//input[@type='text']").click()
    await page.locator("//input[@type='text']").fill("bag icon")
    await page.keyboard.press('Enter')
    await page.locator("")
    page.getByAltText("Vector Shopping Bag Icon 616943 Vector Art at Vecteezy")



})