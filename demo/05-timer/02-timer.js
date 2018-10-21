#!/usr/bin/node

//定时执行任务
console.log('start...');
var timer=setInterval(Loop,500);
//用两种方式取消定时器，分别是：
//1.设置定时器运行时间总时长，时间到后取消定时器；

setTimeout(()=>{
  clearInterval(timer);
  console.log('time end...');
},2000);

//2.设置计数器，重复执行任务次数达到上限，取消定时器；
var count=1;
var time=0;
function Loop(){
  console.log('loop forever');
  time+=500;
  console.log(time);
  if(count++ ==5){
    clearInterval(timer);
    console.log('count end...');
  }
}

