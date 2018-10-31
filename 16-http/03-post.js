#!/usr/bin/node

const http=require('http'),
      url=require('url');

var address=process.argv[2] || 'http://localhost:8080';
var options={
  hostname: url.parse(address).hostname,
  port:url.parse(address).port,
  path: url.parse(address).pathname,
  method:'POST',
  headers: {
    'User-Agent':'03-post.js'                  
  }
};

var req=http.request(options,res=>{
  console.log(`起始行：HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log('响应头：',res.headers);
  console.log();

  res.pipe(process.stdout);
});
//请求体
req.write("请求体：name=tyf");
req.end();

