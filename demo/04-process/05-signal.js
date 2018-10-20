#!/usr/bin/node

//接收信号量，并对信号（SIGINT 和 SIGTSTP）进行处理
console.log('pid:',process.pid);
process.stdin.resume();
process.on('SIGINT',()=>{
  console.log('You have pressed Ctrl+C,good bye');
  process.exit();
});
process.on('SIGTSTP',()=>{
  console.log('You have pressed Ctrl+Z,stop running');
  process.exit();
});
//用控制台快捷键，给程序脚本发送信号量，测试程序的功能逻辑
//CTRL+C 发送 SIGINT 信号量，让程序退出
//CTRL+Z 发送 SIGTSTP 信号量，让程序挂起
//用 kill 命令，给程序脚本发送信号量，测试程序的功能逻辑
