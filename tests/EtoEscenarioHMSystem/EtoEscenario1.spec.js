import {test} from "@playwright/test"
import homepage1 from "../PageObjectModel/homepage1.page"
import testdata from "../testData/e2e1.json"
import login1 from "../PageObjectModel/login1.page"
import bookappointment from "../PageObjectModel/bookappointment.page"
import dashboard from "../PageObjectModel/dashboard.page"
test(" ",async({page})=>{
    let url=testdata.url
    let un=testdata.UserName
    let pwd=testdata.Password
    

    //launch url
//      await page.url("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/")
// //click on bppkappointment
//      await page.locator('//a[@class="btn btn-success"]')
//     //enter un
// await page.locator('//input[@type="text"]')
//     //enter password
// await page.locator('//input[@type="password"]')
//     //enter submit
//     await page.locator('//button[@type="submit"]')
//     //click on book my appointment
//     await page.locator('//a[@href="book-appointment.php"]')
//     //docter specialisation
let homepage=new homepage1(page)
let dashbd=new dashboard(page)
let login=new login1(page)
let bookapp=new bookappointment(page)
await page.goto(url)
await homepage.BookanAppointmentbtn.click()
await login.UserNametf.fill('johndoe12@test.com')
await login.Passwordtf.fill('Test@123')
await login.loginbtn.click()
await dashbd.bookappoinmtLink.click()
await bookapp.DoctorSpecialization.click()
await bookapp.Doctors.click()
await bookapp.Date.fill("29 Dec 2025")
await page.waitForTimeout(2000)
// await bookapp.day.fill('29')
// await bookapp.month.fill('Dec')
// await bookapp.year.fill('2025')
 await bookapp.Time.fill("11:45AM")
// await bookapp.hour.fill('11')
// await bookapp.minute.fill('45')
// await bookapp.meridian.fill('AM')
await page.waitForTimeout(2000)
await bookapp.Submit.click()
await bookapp.usernametxt.click()
await page.waitForTimeout(2000)
await bookapp.logout.click()
})