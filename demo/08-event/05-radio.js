#!/usr/bin/node

//不使用 EventEmitter 类，自己实现事件机制
//radio 类的构造函数有一个入口参数 station 对象
//station 对象包括两个字段：freq 和 name
//radio 类延迟 0 秒发出 play 事件
//radio 类延迟 5 秒发出 stop 事件
//play 和 stop 事件携带事件参数 station 对象
function radio(station){
  var _listeners={};

  setTimeout(()=>{
    emit('play',station);
  },0);

  setTimeout(()=>{
    emit('stop',station);
  },5000);

  function emit(evt, arg) {
    console.log(_listeners);
    if(typeof(_listeners[evt]) === 'undefined') {
      console.error('Error: %s not defined!', evt);
      process.exit();                      
    }
    _listeners[evt].forEach(fn=>{
       fn.call(this, arg);                
    });
  }

  this.on=(evt,fn)=>{
    //console.log(1);
    if(typeof(_listeners[evt]) === 'undefined') {
        _listeners[evt] = [];                
    }
    _listeners[evt].push(fn);
  }
}

module.exports=radio;
