import { test, expect } from '@playwright/test';

test('end to end scenario1', async ({ page }) => {

  
  await page.goto('https://automationexercise.com',{waitUntil:"domcontentloaded",timeout:60000});

  
  await page.click('text=Signup / Login');

  //  Enter signup details
  await page.fill('input[name="name"]', 'Asha');
  await page.fill('input[data-qa="signup-email"]', `asha${Date.now()}@test.com`);
  await page.click('button[data-qa="signup-button"]');
  await page.waitForTimeout(2000)

  //  Fill registration form
  await page.check('#id_gender1');
  await page.fill('#password', 'Test@123');
  await page.waitForTimeout(2000)
  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.waitForTimeout(2000)
  await page.selectOption('#years', '1998');

  await page.fill('#first_name', 'Asha');
  await page.fill('#last_name', 'H');
  await page.fill('#address1', 'Bangalore');
  await page.waitForTimeout(2000)
  await page.selectOption('#country', 'India');
  await page.fill('#state', 'Karnataka');
  await page.waitForTimeout(2000)
  await page.fill('#city', 'Bangalore');
  await page.fill('#zipcode', '560001');
  await page.waitForTimeout(2000)
  await page.fill('#mobile_number', '9999999999');

  await page.click('button[data-qa="create-account"]');

  //  Validate account created
  await expect(page.locator('text=Account Created!')).toBeVisible();

  //  Logout
  await page.hover('text=Account');

  await page.click('text=Logout');

  //  Login again
  await page.fill('input[data-qa="login-email"]', 'asha@test.com');
  await page.fill('input[data-qa="login-password"]', 'Test@123');
  await page.click('button[data-qa="login-button"]');

  //  Validate login
  await expect(page.locator('text=Logged in as')).toBeVisible();
});


