
// without annotation all test case passed

//with test.skip annotation with test second block           ,o/psecond test block skipped

// import {test} from "@playwright/test"
// test("test annotations",async({page})=>{console.log("test 1");
// })
// test.skip("test 2",async()=>{console.log("test 2");
// })
// test("test 3",async()=>{console.log("test 3");
// })


// //with test.only with first test      //only first block will execute others neglected wusing only
// import {test} from "@playwright/test"
// test.only("test annotations",async({page})=>{console.log("test 1");
// })
// test("test 2",async()=>{console.log("test 2");
// })
// test("test 3",async()=>{console.log("test 3");
// })


//with test.fail
//only with these blocks we will get error so use page goto

import {test} from "@playwright/test"
test.fail("test annotations",async({page})=>{//console.log("test 1");
  await page.goto("dghjk21345")  // random no.as url bcoz goto method launches always url

})
test("test 2",async()=>{console.log("test 2");
})
test("test 3",async()=>{console.log("test 3");
})


