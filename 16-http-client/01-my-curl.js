#!/usr/bin/node

const http=require('http'),
      url=require('url');

var address=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
//console.log('URL:',address);
address=global.encodeURI(address);
//console.log('encodeURL:',address);

const options = {//get请求URL包括请求头
  hostname: url.parse(address).hostname,
  port:url.parse(address).port,
  path: url.parse(address).path,
  headers: {
    'User-Agent':'01-my-curl.js'  
  }
};

http.get(options,res=>{
  console.log(`起始行：HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);//响应起始行
  console.log();
  console.log('响应头：',res.headers);//响应头
  console.log();

  res.pipe(process.stdout);//响应体
});
