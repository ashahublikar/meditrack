import {test} from "@playwright/test";
test("pro kabbaddi",async({page})=>{

    await page.goto("https://www.prokabaddi.com/")
    //await page.locator(//h1[@class='title']").click()
   //const names= await page.locator("//div[@class='team-name']/../../following-sibling::div[@class='table-data points']|//div[@class='team-name']").allInnerTexts()
  //console.log(names)
//    await page.locator("//li[@class='navigation-link']").click()
await page.getByRole("link", {name: "Teams", exact: true}).click()
   let team = 'bengaluru-bulls'
  await page.locator(`//div[@class='card-item ${team}']`).click()
//   let namesscore=await page.locator("//div[@class='stats-wrap']/p[@class='name']/following-sibling::p[@class='stats-count']|//div[@class='stats-wrap']/p[@class='name']").allInnerTexts()
//    console.log(namesscore);
let overall=await page.locator("//p[.='Overall']/../following-sibling::div/descendant::p[@class='name']| //p[.='Overall']/../following-sibling::div/descendant::p[@class='stats-count']").allInnerTexts()
console.log(overall);

   
})