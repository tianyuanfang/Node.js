#!/usr/bin/node

var http=require('http');
var url=require('url');

http.createServer((req,res)=>{
  console.log(req.headers);

  var options=url.parse(req.url);
  options.headers=req.headers;

  var proxyRequest=http.request(options,proxyResponse=>{
    proxyResponse.on('data',chunk=>{
      console.log(chunk);
      res.write(chunk,'binary');
    });
    proxyResponse.on('end',()=>{
      res.end();
    });
    
    console.log(proxyResponse.statusCode,proxyResponse.headers);
    res.writeHead(proxyRequest.statusCode,proxyRequest.headers);
  });

  req.on('data',(chunk)=>{
    console.log(chunk);
    proxyRequest.write(chunk,'binary');
  });

  req.on('end',()=>{
    proxyRequest.end();
  });
}).listen(8080);
