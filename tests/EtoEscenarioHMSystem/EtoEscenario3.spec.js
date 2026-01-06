import { test } from "@playwright/test";
import homepage3 from "../PageObjectModel/homepage3.page";
import aboutus from "../PageObjectModel/aboutus.page";
import testdata from '../testData/etoe3.json'


test(" ",async({page})=>{
// let url=testdata.url
 let homepage=new homepage3(page)
 let aboutuspage=new aboutus(page)
await page.goto("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/#contact_us")
await homepage.aboutusLink.click()
await page.waitForTimeout(2000)
await aboutuspage.nametf.fill("arsha")
await page.waitForTimeout(2000)
await aboutuspage.emailadrestf.fill("anujk123@test.com")
await aboutuspage.mobileno.fill("8174569620")
await aboutuspage.entermessagetf.fill("hello everyone")
await page.waitForTimeout(2000)
await aboutuspage.sendmesgbtn.click()




})