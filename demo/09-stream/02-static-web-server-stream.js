#!/usr/bin/node

const http=require('http'),
      fs=require('fs');
//用流的方式实现任务 3 的所有功能
//web 服务器根路径是当面脚本所在目录
//web 服务监听 8080 端口
//正确响应浏览器发送的 URL 请求
//当 URL 地址中的资源文件不存在时，提示用户文件不存在的错误信息
http.createServer((req,res)=>{
  console.log('==========================');
  console.log(req.headers);

  var file=__dirname+req.url;

  if(fs.existsSync(file)){
    fs.createReadStream(file).pipe(res);
  }else{
    res.statusCode=404;
    res.end(req.url+'not exist!');
  }   
}).listen(8080);

