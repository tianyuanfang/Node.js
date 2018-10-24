#!/usr/bin/node

console.log('I am child process.PID:',process.pid);

var timer=setInterval(()=>{
  console.log('time:',Date.now());
},1500);

setTimeout(()=>{
  clearInterval(timer);
  console.log('I am child,goodbye!');
},15000);
