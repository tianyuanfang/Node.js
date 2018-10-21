#!/usr/bin/node

function Bomb(){
  this.msg='Bomb';
}
Bomb.prototype.explode=function(){
  console.log(this.msg);
}
//定义一个定时炸弹对象
var bomb=new Bomb();
//定时炸弹对象和 setTimeout 函数绑定
var timer=setTimeout(()=>{
  bomb.explode();
},2000);
//定时炸弹爆炸
//在定时炸弹爆炸之前，拆除定时炸弹
clearTimeout(timer);
