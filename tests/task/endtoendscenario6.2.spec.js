// import { test, expect } from '@playwright/test';
// test("end to end Scenario 2", async ({ page }) =>{ 
//   await page.goto('https://automationexercise.com',{waitUntil:"domcontentloaded"} )
//   //  Go to Products
//    await page.click('text=Products');
//   //  Search product
//   await page.fill('#search_product', 'Dress');
//   await page.click('#submit_search');
//   // Add product to cart
//    await page.hover('.product-overlay');
//    await page.click('text=Add to cart');
//    // View cart
//   await page.click('text=View Cart');
//   //  Proceed to checkout
//   await page.click('text=Proceed To Checkout');
//    //  Place order
//    await page.click('text=Place Order');
//   await page.waitForTimeout(2000)
//  //  Enter payment details
//   await page.fill('input[name="name_on_card"]', 'Asha');
//   await page.fill('input[name="card_number"]', '4111111111111111');
//   await page.fill('input[name="cvc"]', '123');
//   await page.waitForTimeout(2000)
//   await page.fill('input[name="expiry_month"]', '12');
//   await page.fill('input[name="expiry_year"]', '2026');
// await page.waitForTimeout(2000)
//   await page.click('#submit');

//   //  Validate order confirmation
//   await expect(page.locator('text=Order Placed!')).toBeVisible();
// })


import { test, expect } from '@playwright/test';

test("End to End Scenario 2 - Search & Order Product", async ({ page }) => {

  await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });

  // Home page validation
  await expect(page.locator('text=AutomationExercise')).toBeVisible();

  // Go to Products
  await page.click('a[href="/products"]');

  // Search product
  await page.fill('#search_product', 'Dress');
  await page.click('#submit_search');

  // Validate search result
  await expect(page.locator('.title.text-center'))
    .toContainText('Searched Products');

  // Add first product to cart
  const firstProduct = page.locator('.productinfo.text-center').first();
  await firstProduct.hover();
  await firstProduct.locator('text=Add to cart').click();
  // View Cart (modal)
  await page.locator('text=View Cart').first().click();
  // Validate product added
  await expect(page.locator('.cart_description')).toBeVisible()
  // Proceed to checkout
  await page.click('text=Proceed To Checkout');
  // Wait for login form
  await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();
  // Login
  await page.fill('input[data-qa="login-email"]', 'asha@test.com');
  await page.fill('input[data-qa="login-password"]', 'test123');
  await page.click('button[data-qa="login-button"]');

  // Proceed to checkout again
  await page.click('text=Cart');
  await page.click('text=Proceed To Checkout');
  // Place order
  await page.click('text=Place Order');

  // Payment details
  await page.fill('input[name="name_on_card"]', 'Asha');
  await page.fill('input[name="card_number"]', '4111111111111111');
  await page.fill('input[name="cvc"]', '123');
  await page.fill('input[name="expiry_month"]', '12');
  await page.fill('input[name="expiry_year"]', '2026');
  // Submit order
  await page.click('#submit');

  // Validate success
  await expect(page.locator('text=Order Placed!')).toBeVisible();
});