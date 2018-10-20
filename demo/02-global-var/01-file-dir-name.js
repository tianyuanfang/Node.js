#!/usr/bin/node

console.log('filename',__filename);
console.log('dirname',__dirname);
//完成项目目录下，'views' 子目录中，网页模板 'view.html' 的路径拼接
var name;
//1
console.log(__dirname+'/views/view.html');
//2：跨平台
switch(process.platform){
  case 'linux':
    name=__dirname+'/views/view.html';
    break;
  case 'win32':
    name=__dirname+'\\views\\view.html';
    break;
  default:
    name='wrong';
}
console.log(name);
//3:最佳
const path=require('path');
name=path.join(__dirname,'views','view.html');
console.log(name);

