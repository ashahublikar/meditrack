import {test} from "@playwright/test"
import path from "path"
import excel from "exceljs"

test("writing data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testData/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet7")
    if(!sheet){
       sheet=book.getWorksheet("sheet7") 
    }
    await page.goto("https://www.amazon.in/")
    await page .locator("input#twotabsearchtextbox").fill("shoes")//using amazon app
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
   let alloptions= await page.locator('//div[@class="s-suggestion-container"]').allTextContents()//locating autosugestion

   console.log(alloptions);//returns array of string
   for(let text of alloptions){
    let i=alloptions.indexOf(text)//array.indexof value/text
    sheet.getRow(i+1).getCell(1).value=text  // index strats from zero
   }
   
    //sheet.getRow(1).getCell(1).value = " hello,dont use await in this statement";
   await book.xlsx.writeFile(path.join(__dirname, "../../testData/exceldata.xlsx"))//to update excel sheet

})