#!/usr/bin/node

const dns=require('dns');

var ns=process.argv[2];

/*
dns.lookup(ns,(err,addr)=>{
  console.log(addr);
});
*/

dns.resolve(ns,(err,addr)=>{
  console.log(addr);
});
