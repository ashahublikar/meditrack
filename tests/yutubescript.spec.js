import {test,expect} from "@playwright/test"
test("youtube video",async({page})=>{
  
    await page.goto("https://www.youtube.com/")
    
    
    await page.locator("//input[@placeholder='Search']").fill("kantara song")
    //await page.locator("//input[@id='search']").click()
   
    //await page.locator("//input[@id='search']").click()
    await page.keyboard.press("Enter");
    await page.locator("ytd-video-renderer").first().click()
    await page.waitForTimeout(5000)


})