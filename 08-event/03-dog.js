#!/usr/bin/node

function Dog(name,energy){
  this.name=name;
  this.energy=energy;
  var _listeners={};
  
  var timer= global.setInterval(()=>{
    if(this.energy>0){
      emit('bark',1);
      this.energy--;
    }else{
      global.clearInterval(timer);
    }
  } ,500);

  function emit(e,arg){
    _listeners[e].forEach((fn)=>{
      fn.call(this,arg);
    });
  }

  this.on=(e,fn)=>{
    if(typeof (_listeners[e])==='undefined'){
     _listeners[e]=[];
    }
     _listeners[e].push(fn);
     console.log(_listeners);
  }

}

module.exports=Dog;
