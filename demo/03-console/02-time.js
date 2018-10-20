#!/usr/bin/node

//对耗时任务运行的时间进行采样
//在控制台输出采样的时间
//多运行几次程序，观察同样的耗时任务每次采样的时间是否相同
console.time('test');
longTest();
console.timeEnd('test');

function longTest(){
  var n;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      n=i*j;
    }
  }
  return n;
}
