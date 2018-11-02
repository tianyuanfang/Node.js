#!/usr/bin/node

//导入上面的模块
var pi=require('./02-export-var.js');
//测试模块的接口，观察 module 中的 exports 信息
console.log("pi:",pi);
console.log();

var circle=require('./02-export-function.js');
var c=new circle(1);
console.log("面积：",c.area());
console.log("周长：",c.zhouchang());
console.log();

var Circle=require('./02-export-object.js');
console.log('直径：',Circle.d(1));
console.log('面积：',Circle.area(1));
console.log('周长：',Circle.zhouchang(1));
