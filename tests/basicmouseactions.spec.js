import { test } from "@playwright/test";
test("mouse action",async({page})=>{

//click
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.locator("//button[@id='btn']").click()  //left click
await page.waitForTimeout(2000)
await page.locator("//a[text()='Right Click']").click()

//right click
//await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
//await page.locator("//button[@id='btn_a']").click({button:'right'})
//await page.locator("//button[@id='btn_a']").click({modifiers:['shift']})//shift+click
//await page.waitForTimeout(2000)

//double click
//await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
//await page.locator("#btn_a").dblclick() //css selector in locator
//await page.waitForTimeout(2000)

//click with parameter act as double click
//await page.locator("#btn_a").click({clickcount:1000}) //css selector in locator
//await page.waitForTimeout(2000)


//down and up
await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
await page.locator("//div[@id='circle']").hover()
//await page.mouse.down()
//await page.waitForTimeout(3000)
//await page.mouse.up()
//await page.waitForTimeout(2000)

//disabled or hodden button
await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
//await page.locator("//input[@type='checkbox']").click({force:true})
//await page.waitForTimeout(2000)
//await page.locator("//input[@type='checkbox']").dispatchEvent('click')
//await page.waitForTimeout(2000)
//mouse hover
await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
await page.locator("//img[@src='/assets/message-hint-nbRmWGWf.png']").hover()
await page.waitForTimeout(5000)
await page.mouse.move(100,200)
await page.waitForTimeout(3000)
})

//move
test.only("scrolling",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded() //locator of am element present in end of page
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(1000,1000)
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0,-1000)
    // await page.waitForTimeout(2000)
    

//drag and drop
//moving drag ans drop mouse actions
// test.only("Drag and drop",async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
// await page.locator("//div[text()='Drag Me']").hover()
// await page.waitForTimeout(2000)
// await page.mouse.down()
// await page.mouse.move(200,500)
// await page.waitForTimeout(2000)
// await page.mouse.up()


//drag and drop to target
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
await page.locator("//div[text()='Mobile Charger']").hover()
await page.waitForTimeout(2000)
await page.mouse.down()
await page.locator("//div[text()='Mobile Accessories'] /parent::div").hover()
await page.mouse.up()
await page.waitForTimeout(2000)
    
})