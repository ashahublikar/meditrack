import{ test ,expect} from '@playwright/test'

test('CSS attributes', async ({ page}) =>{
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1',{ waitUntil: 'domcontentloaded',timeout:60000

  })
 
//  let registerButton=  await page.locator("//button[@type='submit']")
   let loginButton= await expect(page.locator("//a[@href='/ui/login']")).toBeVisible()
   //await loginButton.waitFor({ state: 'visible' });
   //await registerButton.waitFor({ state: 'visible' });
 //await expect(registerButton).toHaveCSS('color','rgb(255, 255, 255)')
  // await expect(registerButton).toHaveCSS('background-color','rgb(249, 115, 22)')
  // await expect(registerButton).toHaveCSS('font-size','13px')
  // await expect(registerButton).toHaveCSS('font-weight','700');
  // await expect(registerButton).toHaveCSS('border-radius','4px');
  // await expect(registerButton).toHaveCSS('cursor','pointer');

  await expect(loginButton).toHaveCSS('background-color', 'rgb(0, 123, 255)');
await expect(loginButton).toHaveCSS('color', 'rgb(255, 255, 255)');
await expect(loginButton).toHaveCSS('cursor', 'pointer');
await expect(loginButton).toHaveCSS('border-radius', '4px');
});
//To verify CSS attributes in Playwright, we locate the element, wait for visibility, and assert computed CSS values using toHaveCSS().