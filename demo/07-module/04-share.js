#!/usr/bin/node

//定义模块级变量 count
//var count=0;
//定义构造函数 Num
//Num 有两个公开方法：add 让 count 加一，getCount 得到 count 的值
function Num(){
  this.count=0;
}
Num.prototype.add=function(){
 this.count++;
}
Num.prototype.getCount=function(){
  return this.count;
}
//导出构造函数 Num
module.exports=Num;
