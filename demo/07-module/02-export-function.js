#!/usr/bin/node

const pi=Math.PI;
//定义 circle 函数
//函数的入口参数是圆的半径
//circle 函数返回一个对象
//对象中有两个成员函数，分别计算：圆的面积和周长
function circle(r){
  return {
    area:function(){return pi*r*r;},
    zhouchang:function(){return 2*pi*r;}
  }
}
//导出 circle 函数
module.exports=circle;
//打印 module 信息
//console.dir(module);
