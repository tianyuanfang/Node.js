#!/usr/bin/node
/*
console.log("first");

setTimeout(function(){
 console.log("second");
},1000);

console.log("third");
*/

function Bomb(){
  this.message="Bomb!";
}

Bomb.prototype.explode=function(){
  console.log(this);
  console.log(this.message);
}

var b=new Bomb();

var id=setTimeout(b.explode.bind(b),2000);
//clearTimeout(id);

b.explode();
console.log("b.explode");
