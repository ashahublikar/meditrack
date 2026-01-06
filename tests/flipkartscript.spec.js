import {test,expect} from "@playwright/test"
test("flipkart",async({page})=>{
await page.goto("https://www.flipkart.com/")
await page.locator("//input[@class='Pke_EE']").fill("television")
await page.locator("//a[@href='/offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone']").click()
await page.locator("//a[@title='New Launches']").click()
await page.locator("//img[@alt='6546']").click()
await page.locator("//span[@id='productRating_LSTTVSHBYPVRKUVGNGMIOFD8Z_TVSHBYPVRKUVGNGM_']").click()
await page.locator("//button[@type='button']").click()
await page.locator("button[@fdprocessedid='q7yqtn']").click()
await page.locator("//button[@class='dSM5Ub ZjNM9b KtnAdx']")
await page.locator("//button[@variant='neutral']").click()


})