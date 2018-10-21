#!/usr/bin/node

//从命令行参数获取用户名和密码信息的 base64 编码字符串
const argv=process.argv[2];
//命令行参数的格式：cmd base64_string

//命令行参数不正确时，提示用户命令行参数的正确格式
if(process.argv.length!=3){
  console.log('命令行格式：cmd base64_string');
  process.exit();
}
//将 base64 编码的字符串转换成 utf8 编码的字符串
var buf=new Buffer(argv,'base64');
var info=buf.toString('utf8').split(':');
//将还原后的用户名和密码信息打印在控制台上
console.log('user name:',info[0]);
console.log('password:',info[1]);
//还原信息不正确时，请提示错误信息
if(info.length!=2){
  console.log('信息有误');
  process.exit();
}
