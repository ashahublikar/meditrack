class createticket{
constructor(page){
this.subjecttf=page.locator("#subject")
this.TTDRopdown=page.locator('//select[@name="tasktype"]')
this.pDropdown=page.locator('//select[@name="priority"]')
this.description=page.locator('//textarea[@name="description"]')
this.sendbtn=page.locator('//input[@class="btn btn-primary pull-right"]')


}


}
export default createticket