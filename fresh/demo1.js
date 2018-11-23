#!/usr/bin/node

const http=require('http');
const url=require('url');
const mysql=require('mysql');
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'tyf980327',
  database:'fresh'
});
con.connect();

function connect(account,password){
  const sql='insert into register(account,password) values(?,?)'; 
  if(account && password){
     con.query(sql,[account,password],(err,result)=>{
        if(err){
          console.error("Error:",err);
          process.exit();
        }
        console.log(result);
     });
  }
}

/*
http.createServer((req,res)=>{
  var path=url.parse(req.url);
  var query=qs.parse(path.query);
  //console.log(query);
  var account=query.user;
  var pwd=query.pwd;
  connect(account,pwd);
  res.end(req.url);
}).listen(8080);
*/

http.createServer((req,res)=>{
  var chunk='';
  if(url.parse(req.url).pathname==='/' && req.method=== 'POST'){
     req.on('data',(data)=>{ 
        chunk=JSON.parse(data);
        console.log(chunk); 
        connect(chunk.tel,chunk.pwd);
     });
  }
  res.setHeader('Access-Control-Allow-Methods','*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
  res.setHeader('Access-Control-Allow-Origin','*');

  res.end();
}).listen(8080); 
