#!/usr/bin/node

const msg=['name','email',"qq","mobil"];
var me={};
var i=0;


console.log(msg[i++]+":");
process.stdin.on('data',(data)=>{

  eval('me.'+msg[i-1]+'="'+data.slice(0,data.length-1).toString("utf8")+'"');
  if(i===4){
   console.log(me);  
    process.exit();
  }else{    
    console.log(msg[i++]+":");
  }
});

process.on("end",()=>{
  console.log(me);
});
