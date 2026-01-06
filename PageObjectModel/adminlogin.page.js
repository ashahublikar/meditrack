class adminlogin{
constructor(page){
this.adminun=page.locator('//input[@placeholder="Username"]')
this.adminpwd=page.getByPlaceholder('Password')
this.adminlogbtn=page.locator('//button[@name="submit"]')


}

}
export default adminlogin 