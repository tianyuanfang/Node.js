#!/usr/bin/node

const stdin=process.stdin;
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
});


stdin.on('end',()=>{
  process.exit();
});
