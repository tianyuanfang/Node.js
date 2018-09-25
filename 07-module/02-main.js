#!/usr/bin/node
/*
var pi=require('./02-export-var.js');

console.log('\npi:',pi);
console.log();
console.dir(module);
*/

/*
var circle=require('./02-export-function.js');

console.log('直径：',circle(20).diameter());
console.log('周长：',circle(20).circumference());
console.log('面积：',circle(20).area());
*/

var circle=require('./02-export-object.js');

console.log('直径：',circle.diameter(20));
console.log('周长：',circle.circumference(20));
console.log('面积：',circle.area(20));
