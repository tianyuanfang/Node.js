#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;

fs.readFile(file,(err,data)=>{//异步地读取一个文件的全部内容
  if(err){
    console.log(err.message);
    process.exit(100);
  }else{
    console.log(data.toString('utf8'));
  }
});
