#!/usr/bin/node

//实例化 EventEmitter 对象
const EventEmitter=require('events').EventEmitter;
var e=new EventEmitter();
//每隔 1 秒 EventEmitter 对象发出自定义 hello 事件
setInterval(()=>{
  e.emit('hello');
},1000);
//延迟 5 秒 EventEmitter 对象发出自定义 bye 事件
setTimeout(()=>{
  e.emit('bye');
},5000);
//hello 事件处理函数在控制台打印 hello world 信息
e.on('hello',()=>{
  console.log('hello world');
});
//bye 事件处理函数在控制台打印 goodbye 信息，并结束程序
e.on('bye',()=>{
  console.log('goodbye');
  process.exit();
});
