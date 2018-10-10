#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;
/*
var src=fs.createReadStream(file);

src.on('error',err=>{
  console.log(err.message);
  process.exit(1);
});

src.on('open',function(){
  this.pipe(process.stdout);
});
*/

fs.createReadStream(file).pipe(process.stdout);

process.on('uncaughtException',err=>{//全局异常处理
  console.log(err.message);
  process.exit(100);
});
