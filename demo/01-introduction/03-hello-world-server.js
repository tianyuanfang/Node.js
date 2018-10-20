#!/usr/bin/node

const http=require('http');
var serve=http.createServer();

serve.on('request',(req,res)=>{
  res.end('hello');
});
serve.listen(8080);
