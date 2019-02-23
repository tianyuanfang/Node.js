#!/usr/bin/node

var buf1=new Buffer(256);
const log=console.log;

buf1[0]=0;

log("buf1 length:",buf1.length);
log("\nbuf1 content:",buf1);

for(var i=0;i<256;i++){
  buf1[i]=i;
}
log('\nbuf1 content:',buf1);

var buf2=buf1.slice(216,256);
log('\nbuf2 content:',buf2);

buf2.fill(0);
log('\nbuf2 content:',buf2);

var arr=['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3=new Buffer(arr);
log('\nbuf3 length:',buf3.length);
log('\nbuf3 content:',buf3);

var buf4=new Buffer('hello world',"utf8");
log('\nbuf4 length:',buf4.length);
log('\nbuf4 content:',buf4);

buf4.copy(buf3,0,0,buf4.length);
log('\nbuf3 length:',buf3.length);
log('\nbuf3 content:',buf3);
