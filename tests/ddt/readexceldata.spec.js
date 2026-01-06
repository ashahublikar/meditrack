import { test } from "@playwright/test";
import excel from "exceljs"
import { url } from "inspector";
import path from "path";


//read single data
test("read single data",async({page})=>{

let book=new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
let sheet=await book.getWorksheet("Sheet1")
//let data=await sheet.getRow(1).getCell(1).toString()//return exceljs cell object not the exact value
let data=await sheet.getRow(1).getCell(1).toString()
console.log(data);

})
test(" read multiple data",async({page})=>{
  let book=new excel.Workbook()
   await book.xlsx.readFile((path.join(__dirname,"../../testData/exceldata.xlsx")))
let sheet=book.getWorksheet("Sheet2")
// for(let row=1;row<=sheet.actualRowCount;row++){
//    for( let coloumn=1;coloumn<=sheet.actualColumnCount;coloumn++){
// let data=sheet.getRow(row).getCell(coloumn).toString()
//       console.log(data);
      
//    }

// }
for( let coloumn=1;coloumn<=sheet.actualColumnCount;coloumn++){
         for(let row=1;row<=sheet.actualRowCount;row++){

          let data=sheet.getRow(row).getCell(coloumn).toString()
      console.log(data);
         } 
        }    
})
test.only("pass test data to app",async({page})=>{
let book=new excel.Workbook()
await book.xlsx.readFile((path.join(__dirname,"../../testData/exceldata.xlsx")))
let sheet=book.getWorksheet("Sheet2")
let alldata=[]
for(let r=1;r<=sheet.actualRowCount;r++ ){
 let row=sheet.getRow(r) //for many rows
let url=row.getCell(1).toString()
let username=row.getCell(2).toString()
let password=row.getCell(3).toString()
alldata.push({url:url,username:username,password:password})
}
console.log(alldata);


//to enter data into application
for(let d of alldata){
await page.goto(d.url)
await page.waitForTimeout(3000)
// await page.getByRole("link",{name:"CRM"}).click()
let p2=page.waitForEvent("popup")//execute asynchronously,start listening to thetrigger of new tab,before action
await page.getByRole("link",{name:"Small CRM"}).click()
let page2=await p2//to make synchronously
  
await page2.getByRole("link",{name:"Admin"}).click()
await page2.locator("#txtusername").fill(d.username)

await page2.locator("#txtpassword").fill(d.password)
 await page2.getByRole("button",{name:"login"})
 await page2.close()
await page.waitForTimeout(3000)}


})