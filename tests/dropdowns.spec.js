import {expect,test } from "@playwright/test";
test("dropdowns",async({page})=>{

    //A]STANDARD DROPDOWN
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// await page("//select[@id='select3']")
//1.selectOption()
//await page.waitForTimeout(2000)

//1.value
//await page.locator("//select[@id='select3']").selectOption({value:'India'})//selecting through value
//await page.waitForTimeout(3000)

//2.label
//await page.locator("//select[@id='select3']").selectOption({label:"India"})
//await page.waitForTimeout(2000)

//3.index
//await page.locator("//select[@id='select3']").selectOption({index:7})//index is 8 for dropdown,i am giving 7 bcoz index starts from 0
//await page.waitForTimeout(2000)

//4.visibleText or value
//await page.locator("//select[@id='select3']").selectOption("India")
//await page.waitForTimeout(2000)

//B]MULTIPLE-SELECT DROPDOWN
//using value

//await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//await page.waitForTimeout(2000)
//await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//await page.locator("//select[@id='select-multiple-native']").selectOption([{value:'Mens Casual Premium Slim Fit T-Shirts '},{value:'Mens Cotton Jacket'}])
//await page.waitForTimeout(3000)
//await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
//await page.waitForTimeout(2000)

//using index
//await page.locator("//select[@id='select-multiple-native']").selectOption([{index:1},{index:2},{index:3}])
//await page.waitForTimeout(2000)
//await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
//await page.waitForTimeout(2000)

//C]CUSTOM DROPDOWN
await page.goto("https://www.amazon.in/s?k=shoes&crid=29O3MMILG25CW&sprefix=shoes%2Caps%2C1048&ref=nb_sb_noss_2")
await page.locator("//span[@id='a-autoid-0-announce']").click({force:true})
await page.locator("//a[@class='a-dropdown-link']").first().waitFor()
//let options=await page.locator("//a[@class='a-dropdown-link']").all()
let options=await page.locator("//a[@class='a-dropdown-link']").first().click()
// for(let option of options){
//     let text=await option.textContent()
//     if(text.includes('Best ')){
//        await option.click()

//     }
// }
//await page.waitForTimeout(3000)

//directly by xpath
await page.locator("//a[@id='s-result-sort-select_1']").click()
await page.waitForTimeout(3000)

//variable attached to xpath  for text
let text="price: High to Low"
await page.locator(`a[@class="a-dropdown-link" and text()="${text}"]`).click()
await page.waitForTimeout(3000)


})