#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      log=console.log;
//web 服务器根路径是当面脚本所在目录
//web 服务监听 8080 端口
http.createServer((req,res)=>{
  log('=======================');
  log(req.headers);

  var file=__dirname + req.url;
  fs.readFile(file,(err,data)=>{//异步地读取一个文件的全部内容
    if(err){
      log(err.message);
      res.statusCode=404;
      res.end(err.message);
    }else{
      res.end(data);
    }

  });
}).listen(8080);
//正确响应浏览器发送的 URL 请求
//当 URL 地址中的资源文件不存在时，提示用户文件不存在的错误信息
