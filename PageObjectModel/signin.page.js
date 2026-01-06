class signin{
constructor(page){
this.emailtf=page.locator("#txtusername")
this.pwdtf=page.locator("#txtpassword")
this.loginButton=page.locator('//button[@name="login"]')

}

}
export   default signin