import {test} from "@playwright/test";
test("Cricbuzz",async({page})=>{

    // await page.goto("https://www.cricbuzz.com/")
    // await page.getByTitle("Live Cricket Score")
    //await page.locator("//a[.='Live']/ancestor::a[1]").click()
    //await page.locator("//span[.='KAR']/ancestor::a[1]").click()
    //await page.locator("h1[.='live cricket score']")/child::span[.='RWA']/following::span[.='West Africa Trophy 2025']").click()
//    await page.getByTitle("Live Cricket Score")
    
//     await page.locator("//a[.='Scorecard']").click()
//     await page.locator("//span[.='RWA']/following:://span[.='West Africa Trophy 2025']").click()
//     await page.keyboard.press('Enter')
    //await page.getByTitle("View Profile Of Swapnil Singh")
 //await page.locator("//a[.='Yegbeh Jalloh (wk)']/parent::div[contains(@class,'flex flex-col gap-1 tb')]").click

await page.goto("https://www.cricbuzz.com");


await page.locator("//a[contains(text(),'Live')]").click();


await page.locator("//a[text()='Scorecard']").click();


const batsman = "Virat kohli";
const runsXpath = `//td[contains(text(),'${batsman}')]/following-sibling::td[1]`;

const runs = await page.locator(runsXpath).textContent();
console.log(runs);


})