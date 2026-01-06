import { test,expect} from '@playwright/test';
test('Handle alert, confirm and prompt dialogs', async ({ browser}) => {
    const context=await browser.newContext()
    const page=await context.newPage()
  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html',{ waitUntil: 'load',
    timeout: 60000});
  //  ALERT 
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept();
  });
  await page.click('#alertexample');
  const alertResult = page.locator('#alertexplanation');
  await expect(alertResult).toHaveText('You triggered and handled the alert dialog');
  // CONFIRM 
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('I am a confirm box')
    await dialog.accept(); // click OK
  });
  await page.click('#confirmexample');

  const confirmResult = page.locator('#confirmexplanation');
  await expect(confirmResult).toContainText('You clicked OK');
//  PROMPT 
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('I am a prompt box');
    await dialog.accept('Playwright');
  });
  await page.click('#promptexample');

  const promptResult = page.locator('#promptexplanation');
  await expect(promptResult).toContainText('Playwright');
});