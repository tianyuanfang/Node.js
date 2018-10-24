#!/usr/bin/node

const fs=require('fs');
var server=require('net').createServer();

server.on('connection',(socket)=>{
  console.log('new connection from',socket.remoteAddress);
  //请求的IP地址
  socket.setEncoding('utf8');

  socket.on('data',(data)=>{
    //console.log(data.length,data);
    var cmd=data.slice(0,data.length-2);//把换行信息'\r\n'去掉
    console.log(socket.remoteAddress+":"+socket.remotePort+'>'+cmd);

    switch(cmd){
      case 'ls':
        var files=fs.readdirSync(__dirname);
        files.forEach((f)=>{
          socket.write(f+'\r\n');
        });
        break;
      case 'quit':
        server.close();
        process.exit();
        break;
      default:
        break;
    }
  });

  socket.on('end',()=>{
    console.log(socket.remoteAddress,'disconnected');
  });
}).listen(8080,()=>{
  console.log('TCP server id listening on port 8080');
});
