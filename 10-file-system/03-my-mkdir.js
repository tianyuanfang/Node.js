#!/usr/bin/node

 const fs=require('fs');

 var dir=process.argv[2];
   
 fs.mkdirSync(dir);//给出默认权限775 
