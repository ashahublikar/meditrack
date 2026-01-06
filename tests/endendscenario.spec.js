import {test} from "@playwright/test"
import landing from "../PageObjectModel/landing.page"
import signup from "../PageObjectModel/signup.page"
import signin from "../PageObjectModel/signin.page"
import homepage from "../PageObjectModel/homepage.page"
import createticket from "../PageObjectModel/createticket.page"
import testdata from "../testData/e2e1.json"

test(" ",async({page})=>{
    let url=testdata.url
    let name=testdata.name
    let email=testdata.email
    let password=testdata.password
    let repassword=testdata.repassword
    let contactno=testdata.contactno 
    let subject=testdata.sub
    let des=testdata.description
    page.on("dialog",async(dialog)=>{
    console.log(await dialog.message());
       await dialog.accept()

    })
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepagepage=new homepage(page)
    let createticketpage=new createticket(page)
// //launch the url
// await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
// await landingpage.sinupLink.click()
// //pass name for  name tf
// await signuppage.nametf.fill("aa")
// //email tf
// await signuppage.emailtf.fill("har2@gmail.com")
// //password tf
// await signuppage.passwordtf.fill("12345")
// //Rr-password tf
// await signuppage.repasswordtf.fill("12345")
// //contact no tf
// await signuppage.contacttf.fill("8123456752")
// //gender radio button.
// await signuppage.maleRadiobtn.click()
// //click on submit button
// await signuppage.submitbtn.click()
// //handle alert popup-get the mesg

// //add email id tf
// await signinpage.emailtf.fill("har2@gmail.com")
// //pass password
// await signinpage.pwdtf.fill("12345")
// //click  on login
// await signinpage.loginButton.click()
// //CREATE ticket-click
// await homepagepage.createticketLink.click()
// //add subject to subtf
// await createticketpage.subjecttf.fill("logo font")
// //select an option from task /type dropdown
// await createticketpage.TTDRopdown.selectOption({value:"ot1"})
// //priority dropdown
// await createticketpage.pDropdown.selectOption({value:"important"})
// //description tf
// await createticketpage.description.fill("font and colour in the logo is not as per the requirement")
// //send button
// await createticketpage.sendbtn.click()
// //alert ..messg
// //clic on view ticket
// await homepagepage.vieTicketLink.click()
// //take screenshot
// await page.screenshot({path:"screenshot/ticketscreenshot.png"})

//by connecting test data file
//launch the url
await page.goto(url)
await landingpage.sinupLink.click()
//pass name for  name tf
await signuppage.nametf.fill(name)
//email tf
await signuppage.emailtf.fill(email)
//password tf
await signuppage.passwordtf.fill(password)
//Rr-password tf
await signuppage.repasswordtf.fill(repassword)
//contact no tf
await signuppage.contacttf.fill(contactno)
//gender radio button.
await signuppage.maleRadiobtn.click()
//click on submit button
await signuppage.submitbtn.click()
//handle alert popup-get the mesg

//add email id tf
await signinpage.emailtf.fill(email)
//pass password
await signinpage.pwdtf.fill(password)
//click  on login
await signinpage.loginButton.click()
//CREATE ticket-click
await homepagepage.createticketLink.click()
//add subject to subtf
await createticketpage.subjecttf.fill(subject)
//select an option from task /type dropdown
await createticketpage.TTDRopdown.selectOption({value:"ot1"})
//priority dropdown
await createticketpage.pDropdown.selectOption({value:"important"})
//description tf
await createticketpage.description.fill(des)
//send button
await createticketpage.sendbtn.click()
//alert ..messg
//clic on view ticket
await homepagepage.vieTicketLink.click()
//take screenshot
await page.screenshot({path:"screenshot/ticketscreenshot.png"})


})