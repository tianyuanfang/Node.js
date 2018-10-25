#!/usr/bin/node

var server=require('http').createServer();

server.on('request',(req,res)=>{
  console.log('REQUEST:'+JSON.stringify(req.headers));
  req.pipe(process.stdout);
  res.end('hello world');
});

server.listen(8080,function(){
  console.log('Listening on',this.address().port);
});
