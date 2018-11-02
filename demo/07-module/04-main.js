#!/usr/bin/node

//导入 Num 构造函数
var Num=require('./04-share.js');
//用 Num 实例化 n1 和 n2 两个对象
var n1=new Num();
var n2=new Num();
//n1.add() 方法调用两次
n1.add();
n1.add();
//控制台打印 n1.getCount() 和 n2.getCount()
console.log('n1:',n1.getCount());
console.log('n2:',n2.getCount());
//n2.add() 方法调用一次
n2.add();
//控制台打印 n1.getCount() 和 n2.getCount()
console.log('n1:',n1.getCount());
console.log('n2:',n2.getCount());

