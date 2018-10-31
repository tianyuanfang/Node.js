#!/usr/bin/node

const https=require('https'),
      url=require('url');

var user=process.argv[2] || 'tianyuanfang';
var address='https://api.github.com/search/repositories?q=user:'+user;
//console.log(address);
const options = {//get请求URL包括请求头
  hostname: url.parse(address).hostname,
  port:url.parse(address).port,
  path: url.parse(address).path,
  headers: {
        'User-Agent':'curl/7.0'            
  }
};

https.get(options,res=>{
  var result='';
  res.on('data',data=>{
    result+=data.toString('utf8');
  });
  
  res.on('end',()=>{   
    var str=JSON.parse(result);
    var items=str['items'];
    var total=str['total_count'];
    console.log('Total:',total); 
    console.log("=======================");
    items.forEach((ele,index)=>{
      console.log(index+':'+ele.name);
    });
 });
});
