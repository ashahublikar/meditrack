class loginpage{
constructor(page){
this.usernameTextfield=page.locator("input#username")
this.passwordTextfield=page.locator("//input[@id='password']")
this.submitButton=page.locator('//button[@id="submit"]')
}
}
export default loginpage