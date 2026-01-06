import { test } from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page"
import logindata from "../testData/logindata.json"
test("",async({page})=>{
    let Loginpage=new loginpage(page)
    let url= logindata.url
    let usn=logindata.un
    let pwd=logindata.pwd
//launch url
await page.goto(url)
//pass un
await Loginpage.usernameTextfield.fill(usn)
//pass pwd
await Loginpage.passwordTextfield.fill(pwd)
//click on submit button
await Loginpage.submitButton.click()
await page.waitForTimeout(3000)

})