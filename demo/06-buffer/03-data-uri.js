#!/usr/bin/node

//从命令行参数获取图片文件名
const fs=require('fs'),
      http=require('http'),
      path=require('path'),
      file=process.argv[2];
//命令行参数的格式：cmd file_name

//命令行参数不正确时，提示用户命令行参数的正确格式
if(process.argv.length!=3){
  console.error('命令行参数格式：cmd fileName');
  process.exit();
}
//命令行参数的图片文件不存在时，提示错误信息
try{
  var data=fs.readFileSync(file).toString('base64');//返回file内容
}catch(e){
  console.error(e.message);
  process.exit();
}
//把图片数据生成 data URI 格式的数据
var ext=path.extname(file);//path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。 如果 path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串。
var uriData='data:image/'+ext.slice(1,ext.length)+';base64,'+data;
//例如：data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7
//其协议为 data，并告诉客户端将这个内容作为 image/gif 格式来解析，需要解析的内容使用的是 base64 编码。它直接包含了内容但并没有一个确定的资源地址。

//把 data URI 数据打印到控制台
//console.log('data uri:',uriData);

//把 data URI 数据嵌入到 HTML 页面中
var html='<!DOCTYPE html><html><body><img alt="'+path.basename(file,ext)+'" src="'+uriData+'"></body></html>';//path.basename() 方法返回一个file的最后一部分

//创建一个 HTTP 服务，监听 8080 端口
http.createServer((req,res)=>{
  //console.log(req.headers);
  res.end(html);
}).listen(8080);
//浏览器请求 HTTP 服务的 URL 地址时，得到嵌入图片数据的 HTML 页面
