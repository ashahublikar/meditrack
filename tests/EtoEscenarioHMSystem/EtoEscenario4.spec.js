import { test } from "@playwright/test";
import homepage4 from "../../PageObjectModel/homepage4.page";
import doctorLogin from "../../PageObjectModel/doctorlogin.page";
import docdashboard from "../../PageObjectModel/docdashboard.page";
import addpatient from "../../PageObjectModel/addpatient.page";
test("",async({page})=>{

    let homepage=new homepage4(page)
    let doctorlog=new doctorLogin(page)
    let dashboard=new docdashboard(page)
    let adpatient=new addpatient(page)

    await page.goto("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/")
    await homepage.loginsbtn.click()
    await homepage.doclogins.click()
    await page.waitForTimeout(2000)
    await doctorlog.doctorun.click()
    await doctorlog.doctorun.fill("anujk123@test.com")
await doctorlog.doctorpwd.fill('Test@123')
await doctorlog.doctorlogbtn.click()
await page.waitForTimeout(2000)
await dashboard.patientsbtn.click()
await dashboard.addpatientdrop.click()
await adpatient.pnametf.fill("Ram")
await adpatient.pcontactnotf.fill("4562387986")
await page.waitForTimeout(2000)
await adpatient.pemailtf.fill("ram@gmail.com")
await adpatient.mradiobtn.click()
await adpatient.paddtf.fill("jayanagar")
await page.waitForTimeout(2000)
await adpatient.pagetf.fill("29")
await adpatient.pmedhistf.fill("normal")
await adpatient.addbtn.click()
})