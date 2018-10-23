#!/usr/bin/node

const http=require('http');
const path=require('path');
const fs=require('fs');
const util=require('util');
const log=util.debuglog('wd');

var file;//request file in URL

http.createServer((req,res)=>{
  log('headers:',req.headers);
  log();
  log('url:',req.url);
  file=path.join(__dirname,req.url);
  log();
  log('file:',file);

  var read=fs.createReadStream(file);
  read.on('error',err=>{
    res.end(err.message);
    return;
  });
  read.pipe(res);
}).listen(8080);
