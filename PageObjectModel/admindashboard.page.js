class admindashboard{
constructor(page){
//this.doctordrop=page.locator('#role')
//this.adddoctoroptio=page.locator('//a[@href="add-doctor.php"]')
//this.adddoctoroptio=page.locator('//span[.=" Add Doctor"]')
//this.appointhistorybtn=page.locator('//span[.=" Appointment History "]')
this.usersessionlogs=page.locator('//span[.= " User Session Logs "]  ')
this.adminaerrowbtn=page.locator('//a[@class="dropdown-toggle"] ')
this.adminlogoutbtn=page.locator('//a[@href="logout.php"]')
}

}
export default admindashboard