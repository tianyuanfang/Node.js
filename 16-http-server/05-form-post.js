#!/usr/bin/node

const http=require('http'),
      qs=require('querystring');

var items=[];

http.createServer((req,res)=>{
  console.log(`起始行：${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log();

  if(req.url=='/' && req.method=='GET'){
    showPage(req,res);
  }else if(req.url==='/' && req.method=='POST'){
     var data='';
     req.on('data',chunk=>{
       data+=chunk;
     })

     req.on('end',()=>{
       console.log('data:',data);
       var list=qs.parse(data);

       if(list.item!=''){
         items.push(list.item);
       }
       showPage(req,res);
     });
  }else{
    res.statusCode=404;
    res.end('Error!');   
  } 
}).listen(8080);

function showPage(req,res){
   var html='<!DOCTYPE html>'+
       '<html lang="en">'+
       '<head>'+
          '<meta charset="UTF-8">'+
          '<title>Document</title>'+
       '</head>'+
       '<body>'+
         '<h1>Todo List</h1>'+
         '<form method="POST" action="/">'+
           '<ul>'+
             items.map(function(item){return "<li>"+item+"</li>"}).join("")+
           '</ul>'+
           '<input type="text" name="item">'+
           '<input type="submit" value="Add Item">'+
         '</form>'+
      '</body>'+
      '</html>';
   res.end(html);
}
