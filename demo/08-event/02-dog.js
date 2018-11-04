#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
//Dog 类原型继承 EventEmitter 类
Dog.prototype.__proto__=EventEmitter.prototype;
//Dog 类中，包含：name 和 energy 两个私有数据成员
//name 是狗的名字
//energy 是狗的能量
//狗每叫一次，energy 减 1，energy 为零时，狗不能叫
//用构造函数对私有数据 name 和 energy 进行初始化
//每隔 1 秒发出 bark 狗叫事件
function Dog(name,energy){
    var _name=name;
    var _energy=energy;
    var that=this;
    function bark(){
      if(_energy==0){
        clearInterval(timer);
      }else{
        that.emit('bark');
        _energy--;
      }
    }
    var timer=setInterval(bark,1000);
    this.getName=()=>_name;
    this.getEnergy=()=>_energy;
}
//02-dog.js 模块导出 Dog 类
module.exports=Dog;
