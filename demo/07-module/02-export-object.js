#!/usr/bin/node

const pi=Math.PI;
//定义 Circle 对象字面量
//Circle 对象有三个公开方法，分别计算圆的直径、面积和周长
var Circle={
  d:function(r){return 2*r;},
  area:function(r){return pi*r*r;},
  zhouchang:function(r){return 2*pi*r;}
};
//导出 Circle 对象
module.exports=Circle;
//打印 module 信息
//console.dir(module);
