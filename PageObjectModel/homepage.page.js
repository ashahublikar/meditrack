class homepage{

constructor(page){
this.createticketLink=page.locator('//a[@href="create-ticket.php" and .=" Create Ticket"]')
this.vieTicketLink=page.locator('//a[@href="view-tickets.php"  and text()=" View Ticket"]')


}


}
export default homepage