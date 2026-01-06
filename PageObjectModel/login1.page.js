class login1{
constructor(page){
// this.UserNametf=page.locator('//input[@type="text"]')
// this.Passwordtf=page.locator('//input[@type="password"]')
 this.loginbtn=page.locator('//button[@type="submit"]')
this.loginsLink=page.locator('(//button[@class="btn btn-success btn-sm"])[3]')
}
}
export default login1