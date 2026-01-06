//by using selector as css

// import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")

// //username textfield
// await page.locator("input#username").fill("student")  //first id syntax we will get 1 of 2 so we go for second id syntax in css
// //password textfield
// await page.locator("[type='password']").fill("Password123")
// //submit button
// await page.locator('[class="btn"]').click()
// })

//by using selector as xpath
import {test} from "@playwright/test"
test("browser controls",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

//username textfield
await page.locator("//input[@name='username']").fill("student")  //first id syntax we will get 1 of 2 so we go for second id syntax in css
//password textfield
await page.locator("//input[@type='password']").fill("Password123")
//submit button
//await page.locator("//button[@id='submit']").click()
await page.locator("//button[.='Submit']").click() //(using test function or .)

})