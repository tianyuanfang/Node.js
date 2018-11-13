const express=require('express');
const app=express();//返回app对象

app.get('/',(req,res)=>{
  res.end('hello world!');
});

function c1(req,res,next){
  console.log('c1');
  next();
}
function c2(req,res,next){
  console.log('c2');
  next();
}
app.get('/abc',[c1,c2],(req,res,next)=>{
  console.log('abc');
  next();
 },(req,res)=>{
  console.log('def');
  res.send('ok');
});

app.listen(8080);
