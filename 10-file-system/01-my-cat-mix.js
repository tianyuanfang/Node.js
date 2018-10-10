#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;

var fid=fs.openSync(file,'r');
var wf=fs.readFileSync(fid).toString('utf8');
fs.writeSync(1,wf);//fs.write(fd, string[, position[, encoding]], callback):写入 string 到 fd 指定的文件

fs.closeSync(fid);
