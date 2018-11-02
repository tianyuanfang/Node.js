#!/usr/bin/node

//导入 03-global.js 脚本
require('./03-global.js');
//使用 03-global.js 脚本中的变量、函数和对象
console.log('pi:',pi);
console.log('面积：',circle(1).area());
console.log('周长：',objCircle.zhouchang(1));
//运行 03-main.js，观察程序结果，理解程序出错的原因
//修改 03-global.js 脚本，将变量、函数和对象定义为全局的
//运行 03-main.js 脚本，观察程序结果，理解程序工作原因
