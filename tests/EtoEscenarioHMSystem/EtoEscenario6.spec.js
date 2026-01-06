import { test } from "@playwright/test";
import adminlogin from "../../PageObjectModel/adminlogin.page";
import admindashboard from "../../PageObjectModel/admindashboard.page";
import testdata from '../../testData/etoe5.json';
test(" ",async({page})=>{
let url=testdata.url
let username=testdata.un
let password=testdata.pwd
await page.goto(url)
//let loginpage=new login1(page)
let adminloginpage=new adminlogin(page)
let admindashboardpage=new admindashboard(page)

await page.goto(url)
await adminloginpage.adminun.fill(username)
await adminloginpage.adminpwd.fill(password)
await adminloginpage.adminlogbtn.click()
await admindashboardpage.appointhistorybtn.click()
await admindashboardpage.adminlink.click()
await admindashboardpage.adminlogoutbtn.click()
}

)
