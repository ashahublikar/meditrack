//naukari.com script
import {test} from "@playwright/test"

test("naukari",async ({page})=>{
await page.goto("https://www.naukri.com/")
await page.locator("//a[@href='https://www.naukri.com/registration/createAccount?othersrcp=22636']").click()
await page.locator("//input[@maxlength='35']").fill("asha")
await page.waitForTimeout(2000)
await page.locator("//input[@id='email']").click()
await page.locator("//input[@id='email']").fill("asha@gmail.com")
await page.waitForTimeout(2000)
await page.locator("//input[@type='password']").click()
await page.waitForTimeout(2000)
await page.locator("//input[@type='password']").fill("12345")
await page.waitForTimeout(2000)
await page.locator("//input[@maxlength='10']").click()
await page.locator("//input[@maxlength='10']").fill("7996453166")
await page.waitForTimeout(2000)
await page.locator('//div[@data-val="exp"]').click()
await page.waitForTimeout(2000)
await page.getByText('Send me important updates & promotions via SMS, email, and').click()
await page.waitForTimeout(2000)
await page.locator('//button[@type="submit"]').click();
await page.waitForTimeout(2000)





})
    




