#!/usr/bin/node

const mysql=require('mysql');
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'tyf980327',
  database:'test'
});

con.connect();

//operation db
/*
//查
const sql='select * from books where book_id=?';
con.query(sql,[1],(err,result)=>{
  if(err){
    console.error(err);
    process.exit();
  }
  console.log(result);
});
*/

/*
//增
const sql='insert into books(book_id,title,status) values(?,?,?)';

con.query(sql,[2,'Node.js 实战',0],(err,result)=>{
  if(err){
    console.error(err);
    process.exit();              
  }
  console.log(result);
});
*/

/*
//改
const sql='update books set title=? where book_id=?';
con.query(sql,['MySQL',2],(err,result)=>{
  if(err){
    console.error(err);
    process.exit();              
  }
    console.log(result);
});
*/

//删
const sql='delete from books where book_id=?';
con.query(sql,[2],(err,result)=>{
  if(err){
     console.error(err);
     process.exit();     
  }
  console.log(result);
});

con.end();
