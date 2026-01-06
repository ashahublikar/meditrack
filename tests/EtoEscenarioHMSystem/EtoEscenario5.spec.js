import { test } from "@playwright/test";
//import login1 from "../PageObjectModel/login1.page";
import adminlogin from "../PageObjectModel/adminlogin.page";
import testdata from '../testData/etoe5.json'
import adddoctor from "../PageObjectModel/adddoctor.page";
import admindashboard from "../PageObjectModel/admindashboard.page";

test("",async({page})=>{
let url=testdata.url
let username=testdata.un
let password=testdata.pwd
await page.goto(url)
//let loginpage=new login1(page)
let adminloginpage=new adminlogin(page)
let adddoctorpage=new adddoctor(page)
let admindashboardpage=new admindashboard(page)
//await loginpage.loginbtn.click()
//await loginpage.loginsLink.click()
await adminloginpage.adminun.fill(username)
await adminloginpage.adminpwd.fill(password)
await adminloginpage.adminlogbtn.click()
await admindashboardpage.doctordrop.click()
await admindashboardpage.adddoctoroptio.click()
await adddoctorpage.doctorspeltf.fill("cardiology")
await adddoctorpage.docnametf.fill('Hemant')
await adddoctorpage.docclinicaddtf.fill("shivajinagar")
await adddoctorpage.docfees.fill("500")
await adddoctorpage.doccontno.fill("9654687251")
await adddoctorpage.docemailtf.fill("hemant@123")
await adddoctorpage.docpwdtf.fill("1234")
await adddoctorpage.docconfmpwdtf.fill("1234")
await adddoctorpage.docsubbtn.click()
await adddoctorpage.adminlink.click()
await adddoctorpage.adminlogoutbtn.clcik()
})