#!/usr/bin/node

//导入 05-export-all.js 脚本
//使用导入的对象，进行测试
var obj=require('./05-export-all.js');

console.log('pi:',obj.pi);
console.log('面积：',obj.Circle(1).area());
console.log('周长：',obj.objCircle.zhouchang(1));
