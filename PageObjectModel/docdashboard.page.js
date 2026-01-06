class docdashboard{
constructor(page){
this.patientsbtn=page.locator('(//span[@class="title"])[3]')
this.addpatientdrop=page.locator('//span[.=" Add Patient"]')


}

}
export default docdashboard