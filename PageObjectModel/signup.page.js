class signup{
constructor(page){
this.nametf=page.locator("#name")
this.emailtf=page.locator("#email")
this.passwordtf=page.locator("#password")
this.repasswordtf=page.locator("#cpassword")
this.contacttf=page.locator("#txtpassword")
this.maleRadiobtn=page.locator('//input[@value="m"]')
this.femaleRadiobtn=page.locator('//input[@value="f"]')
this.submitbtn=page.locator('//input[@name="submit"]')

}

}
export default signup