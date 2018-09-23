#!/usr/bin/node

var http=require("http");
var fs=require("fs");
var file=process.argv[2];

var data=fs.readFileSync(file).toString("base64");
var uriData='data:image/'+";base64,"+data;
var html = '<!DOCTYPE html><html><body><img src="' + uriData + '"/></body></html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);
