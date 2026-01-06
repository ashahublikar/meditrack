class doctorLogin{

constructor(page){
this.doctorun=page.getByRole('textbox', { name: 'Username' })
this.doctorpwd=page.locator('//input[@placeholder="Password"]')
this.doctorlogbtn=page.locator('//button[@type="submit"]')
}



}
export default doctorLogin