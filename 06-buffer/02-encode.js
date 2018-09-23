#!/usr/bin/node

var name=process.argv[2],
    pwd=process.argv[3];
var str=name+":"+pwd;

if(process.argv.length!=4){
  console.error("命令行格式：cmd name pwd");
  process.exit();
}
console.log("name:",name);
console.log("pwd:",pwd);

var buf=new Buffer(str,"utf8");
console.log(buf.toString("Base64"));
