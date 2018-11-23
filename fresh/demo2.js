#!/usr/bin/node

const http = require('http'),
      url =require('url');
const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'tyf980327',
    database:'fresh'
});
con.connect();
function connect(account,password){
  const sql='insert into register(account,password) values(?,?)';  if(account && password){
    con.query(sql,[account,password],(err,result)=>{
      if(err){
          console.error("Error:",err);
          process.exit();                                    
      }
      console.log(result);                   
    });      
  }
}


http.createServer((req,res)=>{
 // console.log(req.headers); 
  if(url.parse(req.url).pathname==='/' && req.method=== 'POST'){
      req.on('data',(data)=>{ 
        connect(data.tel,data.pwd);
        console.log(req.headers.host);
        console.log('data: ',data.toString('utf8'));
      });
     
      req.on('end',()=>{
         console.log('over');
      })
  }
  
  res.setHeader('Access-Control-Allow-Methods','*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
  res.setHeader('Access-Control-Allow-Origin','*');
  
  res.end();

}).listen(8080);
    
                                     
