#!/usr/bin/node

const http=require('http');
const path=require('path');
const fs=require('fs');

http.createServer((req,res)=>{
  console.log(req.url);
  file=path.join(__dirname,req.url);
  fs.createReadStream(file).pipe(res);
  /*
  try{
    var rf= fs.readFileSync(file).toString('utf8');
    res.end(rf);
  }catch(err){
    res.end(err.message);
  }
  */
}).listen(8080);
