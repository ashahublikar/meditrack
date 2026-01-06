
//1.getby method
import {test  } from "@playwright/test";
test("get by methods",async({page})=>{
    //await page.goto("https://demo.nopcommerce.com/login")
    //await page.getByLabel("Email:").fill("aa@gmail.com")
    // await page.getByLabel("Email",{exact:false}).fill("aa@gmail.com")
     //await page.getByLabel("Email:",{exact:true}).fill("aa@gmail.com")
     
     //2.getbyplaceholder
     //await page.getByPlaceholder("Search store").fill("computers")
      //await page.getByPlaceholder("Search ",{exact:false}).fill("computers")

     //3.getbytext
     //await page.getByText("Electronics",{exact: false}).first().click()
     
     //4.get by alt text
     // await page.getByAltText("nopCommerce demo store",{exact:true}).click()
    
     //5.getbytitle
    //await page.goto("https://demo.nopcommerce.com/electronics")
    //await page.getByTitle("Show products in category Camera & photo").first().click()
    
    //6.getbyrole
    //await page.getByRole("link",{name:'Camera & photo '}).first().click()

    //7.getbytestid
    // let context = await browser.newContext();
    // let page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("password").fill("abcdefgh");
    
})

