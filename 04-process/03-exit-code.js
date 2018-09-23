#!/usr/bin/node

var code=process.argv[2];
/*
if(process.argv.length<3){
  console.log('请给出命令行参数');

  process.exit(1);
}

if(isNaN(Number(code))){
 console.error('命令行参数类型应为数值类型');
 process.exit(1);
}

process.exit(code);
*/

if(typeof(code)==="undefiend"||isNaN(Number(code))){
  console.error('命令行参数错误');
  
  process.exit(1);
}else{
  console.log("退出码：",code);

  process.exit(code);
}
