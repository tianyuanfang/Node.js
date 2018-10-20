#!/usr/bin/node

//获取命令行参数，得到进程 ID 信息和信号量标识符
const pid=process.argv[2],
      sig=process.argv[3];
//向指定进程 ID 的进程发送特定的信号量
if(process.argv.length!==4||isNaN(Number(pid))){
  console.log('命令行参数错误！');
  process.exit();
}
//用 05-my-kill.js 脚本，向 05-signal.js 脚本发送信号量，测试两个程序的功能逻辑
process.kill(pid,sig);
