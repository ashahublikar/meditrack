import { test } from "@playwright/test";

test.beforeAll('before all',async()=>{

    console.log('before all')
})
test.beforeEach('before each',async()=>{

console.log('before each')

})
test.afterAll('after all',async()=>{

    console.log('after all')
})
test.afterEach('after each',async()=>{


    console.log('after each')
})
test("test1",async()=>{

    console.log('after each')
})
test("test2",async()=>{

console.log('before each')

})