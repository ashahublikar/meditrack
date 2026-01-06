import {test,expect} from "@playwright/test"
import bloodlogin from "../../PageObjectModel/bloodlogin.page"
import bloodhome from "../../PageObjectModel/bloodhome.page"
import testdata from "../../testData/blood.json"
test('home',async({page})=>{
  let url=testdata.url 
  let un=testdata.username
  let pwd=testdata.password 
let loginpage= new bloodlogin(page)
let homepage= new bloodhome(page)
await page.goto(url)
await loginpage.usernametf.fill(un)
await loginpage.passwordtf.fill(pwd)
await loginpage.loginbtn.click()
await expect(page).toHaveTitle("Blood Bank Management System")
await homepage.administratorbtn.click()
await homepage.logoubtn.click()
})