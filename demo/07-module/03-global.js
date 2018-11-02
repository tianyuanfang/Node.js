#!/usr/bin/node

//复制 02-export-* 中的代码
//在 03-global.js 定义模块级变量 pi, 函数 circle 以及对象字面量 objCircle
global.pi=require('./02-export-var.js');
global.circle=require('./02-export-function.js');
global.objCircle=require('./02-export-object.js');
