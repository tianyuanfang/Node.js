#!/usr/bin/node

//实例化 Readable 流
const Readable=require('stream').Readable;
var rs=new Readable();
//实现流的 _read 方法
//_read 方法中循环 push [a-z] 26 个字母
var c='a'.charCodeAt(0);
rs._read=()=>{
  rs.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)){
    rs.push(null);
  }
}
//将流接入到标准输出流
rs.pipe(process.stdout);
//运行程序，观察程序的运行效果
