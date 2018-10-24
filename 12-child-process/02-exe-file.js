#!/usr/bin/node

const cp=require('child_process');

cp.execFile('./02-child.js',(err,out)=>{
  if(err){
    console.error(err.message);
    process.exit();
  }
  console.log(out);
});
