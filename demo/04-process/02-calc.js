#!/usr/bin/node

//获取命令行参数，命令行参数为一个数学表达式
const arg=process.argv[2];
//如果没有命令行参数，打印程序的使用说明
//如果命令行参数是 --help 或者 -h，打印程序的使用说明
//如果命令行参数多于 3 个，多余的参数忽略
//对命令行参数的表达式进行求值，打印求值结果
if(typeof arg==='undefined'||arg==='--help'||arg==='-h'){
  help();
}else{
  calc();
}

function help(){
  const msg = '' 
        + 'usage: cmd-name [OPTION] [expression]\n'
        + 'evaluate the expression.\n'
        + '\n'
        + 'Mandatory arguments to long options are mandatory for short options too.\n'
        + '  -h, --help output help information and exit\n';
  console.log(msg);
}
function calc(){
  console.log(`${arg}=${eval(arg)}`);
}
