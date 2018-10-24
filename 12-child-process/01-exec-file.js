#!/usr/bin/node

const cp=require('child_process');

var cmd=process.argv[2],
    arg=[];
//有没有参数的处理
if(process.argv.length==2){
  cmd='cat';
  arg.push('01-exec-file.js');
}else{
  for(var i=3;i<process.argv.length;i++){
    arg.push(process.argv[i]);
  }
}

cp.execFile(cmd,arg,(err,out,error)=>{//out:第三方程序运行结果
  if(err){
    console.error(error);
    process.exit();
  }
  console.log(out);
});
