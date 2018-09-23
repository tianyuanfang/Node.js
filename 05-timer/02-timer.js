#!/usr/bin/node

console.log("start...");
var id=setInterval(Loop,50);
var count=0;

function Loop(){
  console.log("I will loop forever");
  //2
  if(count++ ===10){
    clearInterval(id);
    console.log("end");
  }
}
/*
//1
setTimeout(()=>{
  clearInterval(id);
  console.log("end");
},1000);
*/
