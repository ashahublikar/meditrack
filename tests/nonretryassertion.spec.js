import { test,expect } from "@playwright/test";
test("non retry assertion",async({page})=>{
//await page.goto("https://demoapps.qspiders.com/ui?scenario=1 ")

//1.toBe
let a=10
//expect(a).toBe(10)
//expect(a).toBe(2)

//2.toBeFalsy
//const b=null;// ONLY null,0,undefined,false,NaN,''
//expect(b).toBeFalsy()

//3.toBeTruthy
let d=0 //other than NaN,'',0,false,undefined
//expect(d).toBeTruthy()

//4.toBeNaN 
  //const c =NaN //ensures value is NaN
  //expect(c).toBeNaN()

  //5.toHaveLength
  //expect('Hello, World').toHaveLength(12);
expect([1, 2, 3]).toHaveLength(3);
//6.toHaveProperty
const x = {
  a: {
    b: [42],
  },
  c: true,
};
//expect(x).toHaveProperty('a.b');
// expect(x).toHaveProperty('a.b', [42]);
// expect(x).toHaveProperty('a.b[0]', 42);
// expect(x).toHaveProperty('c');
// expect(x).toHaveProperty('c', true);
//
//7.to have title
//await page.goto('https://example.com');
  //await expect(page).toHaveTitle('Example Domain');

  //8.tocontain
//const fruits = ["apple", "banana", "mango"];
  //expect(fruits).toContain("banana");

  const A = ["JS", "Playwright", "API", "SQL"];
  //expect(A).toContain("Playwright");


  //9.toequal or deep equality
  const obj = { name: "Asha", skill: "Automation" };
  expect(obj).toEqual({ name: "Asha", skill: "Automation" });

 //10.
  const A = ["JS", "Playwright", "API", "SQL"];
  //expect(A).toContain("Playwright");

  
expect(A).not.toContain("Java");
  //expect(A).toHaveLength(4);


})