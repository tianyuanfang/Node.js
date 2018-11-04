#!/usr/bin/node

//02-play-dog.js 中导入 Dog 类
const Dog=require('./02-dog.js');
//实例化多个 Dog 的对象，不同的 Dog 对象有不同的名字和能量
var taidi=new Dog('taidi',4);
var zangao=new Dog('zangao',8);
//不同的狗采用同一个 bark 事件处理函数
taidi.on('bark',Bark);
zangao.on('bark',Bark);
//bark 事件处理函数在控制台打印狗的名字以及它的能量
function Bark(){
  console.log('name:'+this.getName(),'energy:'+this.getEnergy());
}
