#!/usr/bin/node

//通过 data 事件消费标准输入流中的数据
const stdin=process.stdin,
      stdout=process.stdout;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',data=>{
  stdout.write(data);
});
//消费标准输入流中的数据，就是将标准输入流的数据写到标准输出流中
//在标准输入流中 push 一些字符串
//stdin.push('hello');
//stdin.push(null);
//通过 pipe 方法将标准输入流接到标准输出流上，消费标准输入流中的数据
//stdin.pipe(stdout);
//用 for 循环在标准输出流上输出 a-z 26 个字母
/*
for(var c='a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
  stdout.write(String.fromCharCode(c));
}
*/
//用交互式的方式运行程序
//用流的方式运行程序（命令如下），观察程序运行的结果
//cat 01-std-io.js | ./01-std-io.js
//思考两种程序运行方式的差异以及背后的原理
