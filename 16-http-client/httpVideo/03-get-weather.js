#!/usr/bin/node

var http=require('http');

const {URL}=require('url');

var city=process.argv[2] || '石家庄';
var addr='http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city='+city;
const url=new URL(addr);

http.get(url,res=>{
  var result='';

  res.on('data',data=>{
    result+=data.toString('utf8');
  })

  res.on('end',()=>{
    var weather=JSON.parse(result);
    console.log(weather);
  });
}).on('error',err=>{
  console.log("ERROR:",err.message);
});
