import { test } from "@playwright/test";
test("keyboard actions",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
// await page.locator("//input[@id='name']").fill("asha")

//type
// await page.locator("//input[@id='name']").type("asha")//other approaches
// await page.type("//input[@id='name']","asha")
//await page.locator("//input[@id='name']").click()
//await page.keyboard.type("asha")
// await page.waitForTimeout(2000)
//insertText()
 await page.locator("//input[@id='name']").click()
 await page.keyboard.insertText("asha")
await page.waitForTimeout(2000)

//down and up methods
await page.keyboard.down("Space")
await page.keyboard.up("Space")
await page.keyboard.down("A")
await page.keyboard.up("A")
await page.waitForTimeout(2000)

//press()
await page.keyboard.press('Tab')
await page.keyboard.type('asha@gmail.com')
await page.keyboard.press("Control+A")
await page.keyboard.press("Control+C")
await page.keyboard.press('Tab')
await page.keyboard.press("Control+V")
await page.waitForTimeout(2000)

})
test.only("SCROLLING",async({page})=>{
    await page.goto("https://www.amazon.in/")
    //await page.keyboard.press('ArrowDown')
    //await page.waitForTimeout(2000)

    for(let i=1;i<11;i++){
    await page.keyboard.press('ArrowDown')
    
    }
    await page.waitForTimeout(2000)
    for(let i=1;i<6;i++){
    await page.keyboard.press('ArrowUp')
    }
    await page.waitForTimeout(2000)
})
