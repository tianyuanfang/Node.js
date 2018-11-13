const express=require('express');
const app=express();//返回app对象

app.get('/',(req,res)=>{
  res.end('hello world!');
});

app.listen(8080);
