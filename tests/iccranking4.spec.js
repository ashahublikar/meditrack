import {test} from "@playwright/test";
test("icc cricket rankings",async({page})=>{

await page.goto("https://www.icc-cricket.com/rankings");

const player = "David Warner";
const rating = await page.locator(`//td[contains(text(),'${player}')]/following-sibling::td[1]`).textContent();
await page.keyboard.press('Enter')
console.log(rating);






})