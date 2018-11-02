#!/usr/bin/node

//导入 02-export-* 的三个模块
//暴露出一个对象，对象中包含导入的一个变量、一个函数和一个对象字面量
var obj={
  pi:require('./02-export-var.js'),
  Circle:require('./02-export-function.js'),
  objCircle:require('./02-export-object.js')
};

module.exports=obj;
