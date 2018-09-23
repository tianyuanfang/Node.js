#!/usr/bin/node

var str=process.argv[2];

var buf=new Buffer(str,"base64");
var data=buf.toString("utf8").split(":");
console.log("name:\n",data[0]);
console.log("pwd:\n",data[1]);
