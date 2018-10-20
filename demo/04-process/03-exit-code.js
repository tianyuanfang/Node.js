#!/usr/bin/node

//通过命令行参数获取程序的退出码，以该退出码退出程序
//通过 echo 命令查看程序的退出码
//对命令行参数的退出码，做数据合法性校验
const arg=process.argv[2];

if(typeof arg==='undefined'||isNaN(Number(arg))){
  console.error('命令行参数不正确');
  process.exit();
}else{
  console.log('退出码：',arg);
  process.exit(arg);
}
