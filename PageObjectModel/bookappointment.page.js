class bookappointment{
constructor(page){
this.DoctorSpecialization= page.locator('//select[@name="Doctorspecialization"]')
this.Doctors=page.locator('//select[@name="doctor"]')
this.ConsultancyFees=page.locator('//select[@name="fees"]')
this.Date=page.locator('//input[@name="appdate"]')
this.day=page.locator('//td[.="17"]')
this.month=page.locator('//span[.="Dec"]')
this.year=page.locator('//span[.="2025"]')
this.Time=page.locator('#timepicker1')
this.hour=page.locator('//input[@class="bootstrap-timepicker-hour form-control"]')
this.minute=page.locator('//input[@class="bootstrap-timepicker-minute form-control"]')
this.meridian=page.locator('//input[@class="bootstrap-timepicker-meridian form-control"]')
this.Submit=page.locator('//button[@type="submit"]')
this.usernametxt=page.locator('//span[@class="username"]')
this.logout=page.locator('//a[@href="logout.php"]')
}
}
export default bookappointment