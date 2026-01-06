class donar{
constructor(page){
this.donarlink=page.locator('//a[@href="index.php?page=donors"]')
this.newentrylink=page.locator('#new_donor')
this.fullnametf=page.locator('//input[@name="name"]')
this.addtxtf=page.locator('//textarea[@name="address"]')
this.emailtf=page.locator('//input[@type="email"]')
this.contctft=page.locator('//input[@name="contact"]')
this.bloodgruptf=page.locator('//select[@name="blood_group"]')
this.savebtn=page.locator('//button[.="Save"]')
}


}
export default donar