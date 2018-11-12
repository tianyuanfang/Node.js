#!/usr/bin/node

const Readable=require('stream').Readable;
var c='a'.charCodeAt(0);
//定义 MyReadable 类继承 Readable 类
function MyReadable(){
  Readable.call(this);
}
MyReadable.prototype.__proto__=Readable.prototype;
MyReadable.prototype._read=function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)){
    this.push(null);
  }
}
//MyReadable 类的功能跟任务 6 类似
//实例化 MyReadable 类
var rs=new MyReadable();
//将 MyReadable 类的实例化对象接入到标准输出流上
rs.pipe(process.stdout);
