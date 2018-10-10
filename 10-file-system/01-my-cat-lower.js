#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;

var fid=fs.openSync(file,'r');//r:以读取模式打开文件。如果文件不存在则发生异常。

var len=fs.statSync(file).size;//计数
var buf=new Buffer(len);
fs.readSync(fid,buf,0,len);//fs.read(fd, buffer, offset, length, position, callback)从 fd 指定的文件中读取数据;buffer 是数据将被写入到的 buffer;offset 是 buffer 中开始写入的偏移量;length 是一个整数，指定要读取的字节数。
console.log(buf.toString('utf8'));

fs.closeSync(fid);
