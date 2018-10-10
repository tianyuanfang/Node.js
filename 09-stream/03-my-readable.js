#!/usr/bin/node

const Readable=require('stream').Readable,
      util=require('util');

var MyReadable=function(){
  Readable.call(this);//调用父类构造函数
}
var c=97;
MyReadable.prototype._read=function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)){
    this.push(null);
  }
}

util.inherits(MyReadable,Readable);

var src=new MyReadable();
src.pipe(process.stdout);
