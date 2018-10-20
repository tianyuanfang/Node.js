#!/usr/bin/node

//逐条打印提示信息：姓名、邮箱、QQ、手机
const me={},
      msg=['Name','Email','QQ','Mobile'],
      stdin=process.stdin;
var i=0;
//读取用户键盘输入信息，保存到对象中
//用户键盘输入结束后，打印完整的对象信息
console.log(msg[0]+":");
stdin.on('data',(data)=>{
  eval('me.'+msg[i]+'="'+data.slice(0,data.length-1)+'"');
  if(i===3){
    console.log(me);
    process.exit();
  }else{
    console.log(msg[++i]+":");
  }
});
stdin.on('end',()=>{//ctrl+D触发
  console.log(me);
});
