#!/usr/bin/node

const http=require('http'),
      url=require('url');

var city=process.argv[2] || '石家庄';
var addr='http://v.juhe.cn/weather/index?format=2&key=0ce19c3ab9df52044782ce8959500372&cityname='+city;
addr=global.encodeURI(addr);
console.log(addr);

http.get(url.parse(addr),res=>{
  var result='';
  res.on('data',data=>{
    result+=data.toString('utf8');
  });

  res.on('end',()=>{
    var weather=JSON.parse(result);
    console.log(weather);
  });
});
