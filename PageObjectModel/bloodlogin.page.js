class bloodlogin{

constructor(page){
this.usernametf=page.locator('#username')
this.passwordtf=page.locator('#password')
this.loginbtn=page.locator('//button[.="Login"]')

}

     async getTitle(){

return await this.page.title()

 }

}
export default bloodlogin