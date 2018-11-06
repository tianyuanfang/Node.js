#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var items=[];

http.createServer((req,res)=>{
    if(url.parse(req.url).pathname=='/' && req.method=='GET'){
    console.log(`起始行：${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log();

    var data=qs.parse(url.parse(req.url).query).item;
    console.log('query string:',url.parse(req.url).query);
    console.log('data:',data);
    if(data!=null){
       items.push(data.item);
    }
    console.log(items);
    var html='<!DOCTYPE html>'+
  '<html lang="en">'+
  '<head>'+
    '<meta charset="UTF-8">'+
    '<title>Document</title>'+
  '</head>'+
  '<body>'+
    '<h1>Todo List</h1>'+
    '<form method="GET" action="/">'+
    '<ul>'+
    items.map(function(item){return "<li>"+item+"</li>"}).join("")+
    '</ul>'+
      '<input type="text" name="item">'+
      '<input type="submit" value="Add Item">'+
    '</form>'+
  '</body>'+
  '</html>';
    res.end(html);
  }else{
    res.statusCode=404;
    res.end('Error!');
  } 
}).listen(8080);
