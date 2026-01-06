 //test.fixme annotations

// import {test} from "@playwright/test"
// test.fixme("test annotations",async({page})=>{console.log("test 1");
// })
// test("test 2",async()=>{console.log("test 2");
// })
// test("test 3",async()=>{console.log("test 3");
// })


//test.slow annotations
//it will just slows down the execution,not affect the execution,no error

import {test} from "@playwright/test"
test("test annotations",async({page})=>{
    test.slow()
    console.log("test 1")
})
test("test 2",async()=>{console.log("test 2");
})
test("test 3",async()=>{console.log("test 3");
})


