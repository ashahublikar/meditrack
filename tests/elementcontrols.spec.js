//1.fill and 2.type methods

import { test } from "@playwright/test";
test("elements controls",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//await page.locator("#name").fill("asha")
//await page.locator("#email").type("aa@gmail.com")

//3.click()
//await page.locator("//input[@type='password']").fill("1234")
//await page.locator("//button[@type='submit']").click()
//await page.pause(3000)

//4.innertext and 5.textcontent
//let text=await page.locator('//section[@class="poppins text-[14px]" and text()="Radio Button"]').textContent()
 //console.log(text);
 await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
 await page.locator("//input[@id='name']").fill("asha")
 await page.locator("//input[@type='email']").fill("aagmail.com")
})