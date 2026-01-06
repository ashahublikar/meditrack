class aboutus{
constructor(page){
this.nametf=page.locator('//input[@placeholder="Enter Name"]')
this.emailadrestf=page.locator('//input[@placeholder="Enter Email Address"]')
this.mobileno=page.locator('//input[@name="mobileno"]')
this.entermessagetf=page.locator('//textarea[@placeholder="Enter Your Message"]')
this.sendmesgbtn=page.locator('//button[@type="submit"]')
}
}
export default aboutus