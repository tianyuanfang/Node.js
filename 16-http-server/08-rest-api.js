#!/usr/bin/node

const http=require('http'),
      qs=require('querystring'),
      url=require('url');

var items=['chifan'];

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
  //console.log(msg);
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));
  res.end(msg);
}
function add(req,res){
  var data='';
  req.on('data',chunk=>{
    data+=chunk;
  });
  req.on('end',()=>{
    var item= qs.parse(data).item;
    if(item!='') items.push(item);
  });
  res.end('ADD OK!');
}
function update(req,res){
  res.end(req.method);
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
      res.end('DELETE OK!');
    }else{
      res.end('ERROR!');
    }
  }
}
