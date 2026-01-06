class adddoctor{
construcor(page){
this.doctorspeltf=page.locator('//select[@name="Doctorspecialization"]')
this.docnametf=page.locator('//input[@name="docname"]')
this.docclinicaddtf=page.locator('//textarea[@name="clinicaddress"]')
this.docfees=page.locator('//input[@name="docfees"]')
this.doccontno=page.locator('//input[@name="doccontact"]')
this.docemailtf=page.locator('//input[@name="npass"]')
this.docpwdtf=page.locator('')
this.docconfmpwdtf=page.locator('//input[@name="npass"]')
this.docsubbtn=page.locator('//button[@name="submit"]')
this.adminlink=page.locator('//span[@class="username"]')
this.adminlogoutbtn=page.locator('//a[@href="logout.php"]')

}


}
export default adddoctor