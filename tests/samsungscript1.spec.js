import {test} from "@playwright/test";
test("samsung mobile",async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@type='text']").click()
    await page.locator("//input[@type='text']").fill("samsung phones")
    await page.keyboard.press('Enter')
    // await page.locator("//div[@class='left-pane-results-container']").fill("samsung mobile")
    // await page.locator("//div[@class='left-pane-results-container']").click()

    
    const price=await page.locator("//div[@data-cy='title-recipe']/parent::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::span[@class='a-price-whole']").first().textContent()
    console.log(price);
    


})