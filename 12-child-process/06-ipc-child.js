#!/usr/bin/node

console.log('I am child process.PID:',process.pid);
//往父进程发送消息
process.send('Child process is start! PID:'+process.pid);
//接受父进程消息
process.on('message',(msg)=>{
  console.log('message from parent:',msg);
});
