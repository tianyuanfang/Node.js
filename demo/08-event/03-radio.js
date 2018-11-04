#!/usr/bin/node

const EventEmitter=require('events').EventEmitter,
      util=require('util');
//radio 类用 util 的 inherits 方法继承 EventEmitter 类
util.inherits(radio,EventEmitter);
//radio 类的构造函数有一个入口参数 station 对象
//station 对象包括两个字段：freq 和 name
//radio 类延迟 0 秒发出 play 事件
//radio 类延迟 5 秒发出 stop 事件
//play 和 stop 事件携带事件参数 station 对象
function radio(station){
  setTimeout(()=>{
    this.emit('play',station);
  },0);
  setTimeout(()=>{
    this.emit('stop',station);
  },5000);
}

module.exports=radio;
