import {test,expect} from "@playwright/test";
import { promises } from "node:fs";
test("window hadles",async({page,context})=>{
    // let context=await browser.newContext()
    // let page=await context.newPage()
await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")
  const frame = await page.frameLocator('#iframeResult');
await page.waitForTimeout(2000)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    frame.locator('button').click()])
await page.waitForTimeout(2000)
      await newPage.waitForLoadState();
await page.waitForTimeout(2000)
  const mainTitle = await page.title();
  console.log( mainTitle)

  await page.waitForTimeout(2000)
  const newWindowTitle = await newPage.title();
  console.log( newWindowTitle);

  await page.waitForTimeout(2000)
  await newPage.close();
await page.waitForTimeout(2000)
  console.log('Returned to main window');
})

