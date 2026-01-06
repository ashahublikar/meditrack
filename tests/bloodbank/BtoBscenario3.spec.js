import { test } from "@playwright/test";
import bloodlogin from "../../PageObjectModel/bloodlogin.page";
import bloodhome from "../../PageObjectModel/bloodhome.page";
import donation from "../../PageObjectModel/donation.page";
import testdata from "../../testData/blood.json";

test("Blood donation flow", async ({ page }) => {

  let url = testdata.url;
  let un = testdata.username;
  let pwd = testdata.password;

  let bloodloginpage = new bloodlogin(page);
  let bloodhomepage = new bloodhome(page);
  let donationpage = new donation(page);

  await page.goto(url);

  await bloodloginpage.usernametf.fill(un);
  await bloodloginpage.passwordtf.fill(pwd);
  await bloodloginpage.loginbtn.click();

  await donationpage.blooddonationlink.click();
  await donationpage.newentrybtn.click();

  await donationpage.donarnametf.keyboard.type("asha");
  await donationpage.blodgruptf.fill("B+");
  await donationpage.volumetf.fill("100ml");
  await donationpage.dateofdonatiomtf.fill("25-12-2025");
  await donationpage.savebtn.click();

  await bloodhomepage.administratorbtn.click();
  await page.waitForTimeout(3000);
  await bloodhomepage.logoubtn.click();
});