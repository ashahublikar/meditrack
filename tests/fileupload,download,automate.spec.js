import { test } from "@playwright/test";
import path, { dirname } from "path";
import fs from "fs"
test("upaload file",async ({page})=>{

  //file upload from creating folder in playwright
  await page.goto("https://testautomationpractice.blogspot.com/")

//  console.log(__dirname)
//    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../uploadfiles/aa.xlsx"))


//   await page.locator('#singleFileInput').setInputFiles("C:/Users/Asha Hublikar/Desktop/PLAYWRIGHT/uploadfiles/resume.txt")
//   await page.getByRole("button",{name:'Upload Single File'}).click()
//   await page.waitForTimeout(4000)

// await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Asha Hublikar/Desktop/PLAYWRIGHT/uploadfiles/aa.xlsx","C:/Users/Asha Hublikar/Desktop/PLAYWRIGHT/uploadfiles/resume.txt"])

// await page.getByRole("button",{name:'Upload Multiple Files'}).click()
// await page.waitForTimeout(4000)


//file upload from desktop(local system)

  await page.locator("#singleFileInput").setInputFiles("C:/Users/Asha Hublikar/Desktop/New Text Document.txt")
  await page.getByRole("button",{name:'Upload Single File'}).click()
 await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Asha Hublikar/Desktop/New Text Document.txt","C:/Users/Asha Hublikar/Desktop/New Microsoft Excel Worksheet.xlsx"])
 await page.getByRole("button",{name:'Upload Multiple Files'}).click()
 await page.waitForTimeout(3000)
  
//remove uploaded file
 await page.locator("#singleFileInput").setInputFiles("C:/Users/Asha Hublikar/Desktop/New Text Document.txt")
 await page.locator("#singleFileInput").setInputFiles([])//this removes file.for single file
  await page.getByRole("button",{name:'Upload Single File'}).click()
 await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Asha Hublikar/Desktop/New Text Document.txt","C:/Users/Asha Hublikar/Desktop/New Microsoft Excel Worksheet.xlsx"])
 await page.locator("#multipleFilesInput").setInputFiles([])//removes multiple files
 await page.getByRole("button",{name:'Upload Multiple Files'}).click()
 await page.waitForTimeout(3000)
  
})
test("download file",async({page})=>{
//await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
//await page.getByRole("textbox",{name:"Enter text here"}).fill("i am downloading file")
//await page.getByRole("button",{name:"Download"}).click()//file is less size
//await page.waitForTimeout(3000)

//to store it in particular folder
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.getByRole("textbox",{name:"Enter text here"}).fill("i am downloading file")
await page.locator("#fileName").fill("newfile.txt")//to keep it in new file name not suggested name
 let [downloadfile]= await Promise.all([
page.waitForEvent("download"),
 page.getByRole("button",{name:"Download"}).click()])//file is less size
 //let downloadfolder="C:/Users/Asha Hublikar/Desktop/PLAYWRIGHT/downloadfile"
let downloadfolder="C:/Users/Asha Hublikar/Desktop/downlods"//in local folder
 let filename=downloadfile.suggestedFilename()
// await downloadfile.saveAs(path.join(downloadfolder,filename))//directly download
//await downloadfile.saveAs(path.join(__dirname,"../downloadedfile",filename))//it will store in same downloaded folder with same name so replace first one
await downloadfile.saveAs((path.join(downloadfolder,filename)))//local sysytem
//console.log(await downloadfile.path());//to chcek the path

 await page.waitForTimeout(3000)
 })
//without using promise.all()
test.only("downloads2",async ({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.getByRole("textbox",{name:"Enter text here"}).fill("i am downloading file")
await page.locator("#fileName").fill("file.txt")//it will overide then if same not visible
let download=page.waitForEvent("download")
page.getByRole("button",{name:"Download"}).click()
let downloadfile=await download//download promise should be resolved using await,once resolved store it in variable
//this line bcoz in line 68 no await so to maintain synchronisation 
let downloadfolder="C:/Users/Asha Hublikar/Desktop/downlods"//in local folder
 let filename=downloadfile.suggestedFilename()//to reduce complication in 80 line we should store in single variable
 let fullpath=path.join(downloadfolder,filename)
 await downloadfile.saveAs((path.join(downloadfolder,filename)))//combination of above lines
 await page.waitForTimeout(3000)//we manually verified by opening folder after execution completes

 //verify file downloded in verified path/not /saved
if(fs.existsSync(fullpath)){

  console.log(`file exists: ${fullpath}`);  
}else{console.log(`no such file exists`);


}
})


