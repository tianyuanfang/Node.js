#!/usr/bin/node

const stdin=process.stdin,
      stdout=process.stdout;
stdin.setEncoding('utf8');
//通过 data 事件消费标准输入流中的数据
//消费标准输入流中的数据，就是将标准输入流的数据写到标准输出流中
stdin.on('data',data=>{
  stdout.write(data);
});
//在标准输入流中 push 一些字符串
//stdin.push('hello');
//通过 pipe 方法将标准输入流接到标准输出流上，消费标准输入流中的数据
//stdin.pipe(stdout);
//stdout.write('\n');
//用 for 循环在标准输出流上输出 a-z 26 个字母
for(var str='a'.charCodeAt(0);str<='z'.charCodeAt(0);str++){
  stdout.write(String.fromCharCode(str));
}
stdout.write('\n');
//用交互式的方式运行程序
//用流的方式运行程序（命令如下），观察程序运行的结果
//cat 01-upper-case.js | ./01-upper-case.js
//思考两种程序运行方式的差异以及背后的原理
