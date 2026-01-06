import {test} from "@playwright/test";
import { escape } from "querystring";
test("make my trip",async({page})=>{

    await page.goto("https://www.makemytrip.com/")
    // await page.keyboard.press(escape)
    await page.locator("//span[@class='commonModal__close']").click()

    
    const month = "January";
    const year = "2026";
    const day = "24";
    await page.keyboard.press("Escape")
    await page.getByRole("textbox", {name: "from", exact: true}).fill("Bengaluru")
    

        // await page.locator(`//div[contains(text(),'${month} ${year}')]
        // /ancestor::div[contains(@class,'DayPicker-Month')]
        // //p[text()='${day}']`).click()

    await page.pause()
    })