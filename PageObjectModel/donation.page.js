class donation {
  constructor(page) {
    this.page = page;

    this.blooddonationlink = page.locator('//a[@href="index.php?page=donations"]');
    this.newentrybtn = page.locator('#new_donation');

    
    this.donarnametf = page.locator(
      '(//span[contains(@class,"select2-container")])[1]'
    );

    this.blodgruptf = page.locator('//input[@type="text"]');
    this.volumetf = page.locator('//input[@type="number"]');
    this.dateofdonatiomtf = page.locator('//input[@type="date"]');
    this.savebtn = page.locator('#submit');
  }
}

export default donation;
