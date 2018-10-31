#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  console.log('请求头：',req.headers);
  req.pipe(process.stdout);//请求体
  
  res.end('响应体：OK!');
}).listen(8080);
