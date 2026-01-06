

let count =0
let skip =false
for(let i=2;i<=50;i=i+2){
  if(!skip) {

    console.log(i);

  }
    count++

   if(count===5){
    skip=!skip
    count=0
   }
}