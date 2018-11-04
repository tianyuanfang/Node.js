#!/usr/bin/node

//04-listen-radio.js 脚本，实例化 radio 对象
const radio=require('./04-radio.js');
var station={
  freq:'106.7',//频率
  name:'music radio'
};
var r=new radio(station);
//处理 radio 对象的 play 和 stop 事件
r.on('play',station=>{
  console.log('freq:'+station.freq,'name:'+station.name,'PLAY');
});
r.on('stop',station=>{
  console.log('freq:'+station.freq,'name:'+station.name,'STOP');
});
//play 和 stop 事件处理函数打印 station 电台信息以及状态

