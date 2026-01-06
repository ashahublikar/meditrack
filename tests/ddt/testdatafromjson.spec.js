import { test } from "@playwright/test";
import data from "../../testdata/data.json"
test("",async({page})=>{
for( let d of data.valid  ){

    await page.goto(d.url)
    await page.locator("input#username").fill(d.Username)
  await page.locator("input#password").fill(d.Password)
await page.getByRole("button",{name:"Submit"})
let title=await page.title()
//console.log(title);
if(title=="Logged In Successfully | Practice Test Automation"){

    console.log("valid credentials");
    

}
else{
    console.log("invalid Credentials");
}
}
for(let d of data.invalid){
await page.goto(d.url)
    await page.locator("input#username").fill(d.Username)
  await page.locator("input#password").fill(d.Password)
await page.getByRole("button",{name:"Submit"})
let title=await page.title()
//console.log(title);
if(title=="Logged In Successfully | Practice Test Automation"){

    console.log("valid credentials");
    

}
else{
    console.log("invalid Credentials");



}
}

})

test.only(" ",async({page})=>{
for(let key in data){
console.log(key)
for(let d of data[key]){

    await page.goto(d.url)
    await page.locator("input#username").fill(d.Username)
  await page.locator("input#password").fill(d.Password)
await page.getByRole("button",{name:"Submit"})
let title=await page.title()
//console.log(title);
if(title=="Logged In Successfully | Practice Test Automation"){

    console.log("valid credentials");
    

}
else{
    console.log("invalid Credentials");

}
}
}
})