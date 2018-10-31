#!/usr/bin/node

const http=require('http');
const url=require('url');
const addr='http://www.sian.com/';

function getOption(addr){
  var options=url.parse(addr);
  options.headers={'User-Agent':'curl/7.0'};
}

function getURL(opt){
  http.get(opt,res=>{
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    console.log(res.headers);
    console.log();

    if(res.statusCode>300 && res.statusCode<400){
      var newAddr=res.headers['location'];
      getURL(getOption(newAddr));
    }else{
      res.pipe(process.stdout);
    }
  });
}

getURL(getOption(addr));
