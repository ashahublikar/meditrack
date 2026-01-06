import { test,expect} from "@playwright/test";
test("frames",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")

//total frames
let frames=await page.frames()
// console.log( await frames.length);

// for(let frame of frames){
// await frame.title()
// console.log(await frame.title());
// }
// console.log(await page.title);

//first approach--frame()--name,url

let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
await frame1.locator("//input[@name='mytext1']").fill('asha')
await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain('asha')
//await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain('arshad')

//second approach locator
// let tfFrame2=await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")

// await tfFrame2.fill('ashuu')
// await page.waitForTimeout(2000)

//THIRD APPROACH
//let frame2=await page.locator("//frame[@src='frame_2.html']").contentFrame()
//frame2.locator("//input[@name='mytext2']").fill('arsh')
//await page.waitForTimeout(2000)

//.....
//await page.locator("//div[@class='ulDsob' and .='I am human']").click()
let frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
let button=await frame3.frameLocator('//iframe').locator("//div[@class='ulDsob' and .='I am human']")
button.click()
}) 