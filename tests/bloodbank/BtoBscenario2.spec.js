import {test} from "@playwright/test"
import donar from "../../PageObjectModel/donar.page"
import bloodlogin from "../../PageObjectModel/bloodlogin.page"
import bloodhome from "../../PageObjectModel/bloodhome.page"
import testdata from "../../testData/blood.json"
test(" ",async({page})=>{
let url=testdata.url
let un=testdata.username
let pwd=testdata.password

let donarpage=new donar(page)
let bloodloginpage=new bloodlogin(page)
let bloodhomepage=new bloodhome(page)


await page.goto(url)
await bloodloginpage.usernametf.fill(un)
await bloodloginpage.passwordtf.fill(pwd)
await bloodloginpage.loginbtn.click()
await page.waitForTimeout
await donarpage.donarlink.click()
await donarpage.newentrylink.click()
await donarpage.fullnametf.fill("asha")
await donarpage.addtxtf.fill("jayanagar")
await page.waitForTimeout
await donarpage.emailtf.fill("asha@gmail.com")
await donarpage.contctft.fill("7854213698")
await donarpage.bloodgruptf.click()
await page.waitForTimeout
await donarpage.savebtn.click()
await bloodhomepage.administratorbtn.click()
await page.waitForTimeout
await bloodhomepage.logoubtn.click()
})