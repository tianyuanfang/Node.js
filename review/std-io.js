#!/usr/bin/node

var msg=['姓名','邮箱','QQ','手机'];
var stdin=process.stdin;
var i=0;
var obj={};
var log=console.log;

log(msg[i]+':');

stdin.on('data',data=>{
  //log(data);
  obj[msg[i]]=data.toString('utf8').slice(0,data.length-1);
  if(i==3){
    log(obj);
    process.exit();
  }else{
    log(msg[++i]+':');
  }
});
