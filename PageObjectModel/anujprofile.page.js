class anujprofile{
constructor(page){
this.docspectf=page.locator('//select[@name="Doctorspecialization"]')
this.docnametf=page.locator('//input[@type="text"]')
this.docclinaddtf=page.locator('//textarea[@name="clinicaddress"]')
this.docfees=page.locator('//input[@name="docfees"]')
this.doccontno=page.locator('//input[@name="doccontact"]')
this.docemailtf=page.locator('//input[@type="email"]')
this.docupdatbtn=page.locator('//button[@type="submit"]')
this.anujkumar=page.locator('//span[@class="username"]')
this.doclogout=page.locator('//a[@href="logout.php"]')


}

}
export default anujprofile