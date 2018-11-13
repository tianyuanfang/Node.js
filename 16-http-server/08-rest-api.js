#!/usr/bin/node

const http=require('http'),
      qs=require('querystring'),
      url=require('url');

var items=['吃饭'];

http.createServer((req,res)=>{
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    default:
      res.end('error!');
      break;
  }
 }).listen(8080);

function select(req,res){
  var msg=JSON.stringify(items);
 // console.log(msg);
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(msg);
}

function add(req,res){
  var data='';
  req.on('data',chunk=>{
    data+=chunk;
  });
  req.on('end',()=>{
    console.log(data);
    //var item= qs.parse(data).item;
    var item=data;
    if(item!='') items.push(item);
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('ADD OK!');
}

function update(req,res){
  var arg=req.url.split('/');
  if(arg[1]==''){
    items=[];
  }

  var item='';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data',chunk=>{item+=chunk});
  req.on('end',()=>{
    var i=parseInt(arg[1]);
    if(!item[i]){
      res.statusCode=404;
      res.end('Not found');
    }else{
      items[i]=item;
      res.statusCode=200;
      res.end('UPDATE OK!');
    }
  });
}

function remove(req,res){
   if(req.url=='/'){
    items=[];
    res.end('DELETE OK!');
  }else{
    var id=qs.parse(url.parse(req.url).query).id;
    console.log('id:',id);
    if(id>=0 && id<items.length){
      items.splice(id,1);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('DELETE OK!');
    }else{
      res.end('ERROR!');
    }
  }
}
