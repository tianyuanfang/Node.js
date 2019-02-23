#!/usr/bin/node

console.log("file name:",__filename);
console.log("dir name",__dirname);


//var file=__dirname+"/view/data.html";
//console.log("data file:",file);

//跨平台
/*
switch(process.platform){
  case 'linux':
    file=__dirname+"/view/data.html";
   break;
  case 'win32':
    file=__dirname+"\\view\\data.html";
    break;
  default:
    file='error';
}
console.log("data file:",file);
*/

const path=require("path");
file=path.join(__dirname,"view","data.html");
console.log("data file",file);
