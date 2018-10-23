#!/usr/bin/node

//从命令行参数获取登录网站的用户名和密码信息
const usr=process.argv[2],
      pwd=process.argv[3];
//命令行参数的格式：cmd username password

//命令行参数不正确时，提示用户命令行参数的正确格式
if(process.argv.length!=4){
  console.log('命令行格式：cmd username password');
  process.exit();
}
//在控制台打印用户名和密码信息
console.log('username:',usr);
console.log('password:',pwd);
//将用户名和密码信息拼接成一个字符串，用冒号（:）分割
var str=usr+':'+pwd;
//将拼接后的字符串转化成 base64 编码，并打印在控制台上
var buf=new Buffer(str);
console.log('base64:',buf.toString('base64'));
