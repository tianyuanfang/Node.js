#!/usr/bin/node

const cp=require('child_process');

console.log('I am parent process.PID:',process.pid);
var cmd=cp.fork('./06-ipc-child.js');
//父进程给子进程发消息
setTimeout(()=>{
  cmd.send('I am parent,PID:'+process.pid);
},3000);
//父进程接受子进程发来的消息
cmd.on('message',(msg)=>{
  console.log('CHILD-MSG:',msg);
});
