
 import { test,expect } from '@playwright/test';

// test('callback function example', async () => {

//     function greet(callback, name) {
//         console.log("Hi " + name);
//         callback();
//     }

//     function print() {
//         console.log("Goodbye");
//     }

//     greet(print, "Asha");

// });
test("amazon cart",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(2000)
await page.locator('//a[@href="/gp/cart/view.html?ref_=nav_cart"]').click()
await page.waitForTimeout(2000)
await expect(page).toHaveURL(/cart/);

})