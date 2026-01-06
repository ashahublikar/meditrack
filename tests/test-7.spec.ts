import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://49.249.28.218:8081/TestServer/Build/Blood_Bank_System/login.php');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ad,');
  await page.getByRole('textbox', { name: 'Password' }).press('NumLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Administrator' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});