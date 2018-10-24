#!/usr/bin/node

const cp=require('child_process');

console.log('I am parent.PID:',process.pid);

cp.fork('./02-child.js');

setTimeout(()=>{
  console.log('I am parent,bye!');
  process.exit();
},6000);
