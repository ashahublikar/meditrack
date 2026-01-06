import { test } from "@playwright/test";
import homepage2 from "../../PageObjectModel/homepage2.page";
import login1 from "../../PageObjectModel/login1.page";
import doctorLogin from "../../PageObjectModel/doctorlogin.page";
import anujprofile from "../../PageObjectModel/anujprofile.page";
import dashboard from "../../PageObjectModel/dashboard.page"; 

test("",async({page})=>{

     let url=testdata.url
     let un=testdata.UserName
     let pwd=testdata.Password
    //await page.goto("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/#gallery")
let homepage=new homepage2(page)
let dashbd=new dashboard(page)
let login=new login1(page)
let doclog=new doctorLogin(page)
let anujpro =new anujprofile(page)
await page.goto(url)
await homepage.loginsbtn.click() 
await homepage.doclogins.click()
await login.loginsLink.click() 
await doclog.doctorun.fill("anujk123@test.com")
await doclog.doctorpwd.fill("Test@123")
await doclog.doctorlogbtn.click()
await dashbd.docupdatepro.click()
await anujpro.docspectf.fill('dental care')
await anujpro.docnametf.fill('Rambo')
await anujpro.docclinaddtf.fill('mahanteshnagar,dasarahalli')
await anujpro.docfees.fill('400')
await anujpro.doccontno.fill('7452145888')
await anujpro.docemailtf.fill('rambo@gmail.com')
await  anujpro.docupdatbtn.click()
await anujpro.anujkumar.click()
await anujpro.doclogout.click()
})
