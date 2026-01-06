import { test, expect } from "@playwright/test";

test("custom waits", async ({ page }) => {
  await page.goto("https://www.flipkart.com/")

  await page.locator("//input[@class='Pke_EE']").fill("bangles");

  await page.waitForFunction(() => {
    return document.querySelectorAll("div.pVNZxj").length > 0;
  });
  await page.waitForTimeout(2000)
  const allautosugg = await page.locator("//div[contains(@class,'pVNZxj')]").allTextContents();
  console.log(allautosugg);
});
