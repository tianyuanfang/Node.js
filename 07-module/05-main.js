#!/usr/bin/node

const circle=require('./05-export-all.js');

console.log('pi:',circle.pi);
console.log('周长：',circle.obj.circumference(20));
console.log('面积：',circle.fun(20).area());
console.log('直径：',circle.obj.diameter(20));
