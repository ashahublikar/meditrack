import { test } from "@playwright/test";
test("auth pops",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
{httpsCredentials:
    {
        username:"admin"
        password:"admin"

    }
}

})