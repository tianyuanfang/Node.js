#!/usr/bin/node

//定义一个 user 对象，包含三个字段：name, age, qq
const user={
  name:'tyf',
  age:21,
  qq:'1784634905'
};
//使用三种占位符，分别输出三种变量类型：字符串，整数和 JSON 数据
console.log('name:%s',user.name);
console.log('age:%d',user.age);
console.log('JSON:%j',user);
//以两种不用占位符的方式输出 user.qq 信息
console.log('qq:%s',user.qq);
console.log(`qq:${user.qq}`);
//向标准错误流中输出信息：Error：something wrong!
console.error('Error:something wrong!');
//通过命令行重定向，观察 console.log 和 console.error 两个方法所使用流的区别
//./01-format.js > output.txt
//./01-format.js 2> error-msg.txt
