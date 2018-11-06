#!/usr/bin/node

var http=require('http');
var url=require('url');

var addr=process.argv[2] || 'http://www.sian.com';
var options=url.parse(addr);

//console.log(options);
options.method='GET';
options.headers={'User-Agent':'02-my-curl.js'};

http.get(options,res=>{
  console.log('status:',res.statusCode);
  console.log('status message:',res.statusMessage);
  console.log('HTTP version:',res.httpVersion);
  console.log();

  console.log(res.headers);
  console.log();

  res.pipe(process.stdout);
});
