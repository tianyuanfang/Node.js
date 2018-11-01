#!/usr/bin/node

const http=require('http'),
      url=require('url');

http.createServer((req,res)=>{//代理（req是客户端给代理的请求，res是代理给客户端的响应）
  console.log('请求头：',req.headers);
  
  var options=url.parse(req.url);
  options.headers=req.headers;

  var proxyRequest=http.request(options,proxyRes=>{//代理替客户端给服务器发出请求，proxyRes是服务器给代理的响应
    proxyRes.on('data',data=>{
      console.log(data.toString('utf8'));
      res.write(data,'binary');
    });

    proxyRes.on('end',()=>{
      res.end();
    });
    console.log(proxyRes.statusCode,proxyRes.headers);
    res.writeHead(proxyRes.statusCode,proxyRes.headers);
  });
  //当客户端发来数据时，代理再发送给服务器数据
  req.on('data',data=>{
    console.log(data);
    proxyRequest.write(data,'binary');
  });
  req.on('end',()=>{
    proxyRequest.end();
  });
}).listen(8080);
  
  
