// import { test, expect } from '@playwright/test';
// import path from 'path';

// test('Handle nested frames, file upload & file download', async ({ page }) => { 
// //1. HANDLE NESTED FRAMES
//   await page.goto('https://the-internet.herokuapp.com/nested_frames',{waitUntil:'load'});
//   // Switch to top frame
//   const topFrame = page.frame({ name: 'frame-top' });

//   // Switch to left frame inside top frame
//   const leftFrame = topFrame.childFrames().find(f => f.name() === 'frame-left');
//   console.log('Left Frame Text:', await leftFrame.locator('body').innerText());
//   // Switch to middle frame
//   const middleFrame = topFrame.childFrames().find(f => f.name() === 'frame-middle');
//   const middleText = await middleFrame.locator('#content').innerText();
//   console.log('Middle Frame Text:', middleText);
//   expect(middleText).toBe('MIDDLE');

//   // Switch to bottom frame
//   const bottomFrame = page.frame({ name: 'frame-bottom' });
//   console.log('Bottom Frame Text:', await bottomFrame.locator('body').innerText());
//      //2. FILE UPLOAD
//   await page.goto('https://the-internet.herokuapp.com/upload');

//   // Upload file
//   await page.setInputFiles('#file-upload', path.join(__dirname, 'sample.txt'));
//   await page.click('#file-submit');

//   // Validate upload
//   await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
     
//   //3. FILE DOWNLOAD
// await page.goto('https://the-internet.herokuapp.com/download');
// // Wait for download
//   const downloadPromise = page.waitForEvent('download');
//   await page.click('a[href="download/some-file.txt"]');
//   const download = await downloadPromise;
//   // Save downloaded file
//   const filePath = path.join(__dirname, 'downloads', download.suggestedFilename());
//   await download.saveAs(filePath);

//   console.log('File downloaded at:', filePath);
// });
import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Handle nested frames, file upload & file download', async ({ page }) => {

  // 1. HANDLE NESTED FRAMES
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  const leftFrame = await page.waitForFrame(frame => frame.name() === 'frame-left');
  console.log('Left Frame Text:', await leftFrame.locator('body').innerText());

  const middleFrame = await page.waitForFrame(frame => frame.name() === 'frame-middle');
  const middleText = await middleFrame.locator('#content').innerText();
  console.log('Middle Frame Text:', middleText);
  expect(middleText).toBe('MIDDLE');

  const bottomFrame = await page.waitForFrame(frame => frame.name() === 'frame-bottom');
  console.log('Bottom Frame Text:', await bottomFrame.locator('body').innerText());

  // 2. FILE UPLOAD
  await page.goto('https://the-internet.herokuapp.com/upload');

  const uploadFilePath = path.join(__dirname, 'sample.txt');
  fs.writeFileSync(uploadFilePath, 'Playwright File Upload');

  await page.setInputFiles('#file-upload', uploadFilePath);
  await page.click('#file-submit');

  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');

  // 3. FILE DOWNLOAD
  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('a').first().click();
  const download = await downloadPromise;

  const downloadDir = path.join(__dirname, 'downloads');
  fs.mkdirSync(downloadDir, { recursive: true });

  const filePath = path.join(downloadDir, download.suggestedFilename());
  await download.saveAs(filePath);

  console.log('File downloaded at:', filePath);
});