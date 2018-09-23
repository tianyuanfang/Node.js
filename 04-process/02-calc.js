#!/usr/bin/node

//获取命令行参数
var argv=process.argv;
for(var i in argv){
  console.log(i,argv[i]);
}


function help(){
 var msg="usage: cmd-name [OPTION] [expression]\n"+
 "evaluate the expression.\n"+"\n"+

 "Mandatory arguments to long options are mandatory for short options too.\n"+
   "-h, --help output help information and exit\n";
 console.log(msg);
}

var argv2=process.argv[2];
if(argv2===undefined||argv2==="--help"||argv2==="-h"){
  help();
}
else{
  console.log(argv2+"="+eval(argv2));
}
