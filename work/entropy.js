#!/usr/bin/node

var argv=process.argv;
//var sum=0;
var p=[];
const stdin=process.stdin;

function cal(){

  var result=0;
  for(var i in p){
      result+=(-p[i]*Math.log(p[i],2));            
    }
   return result;
}

//没有参数时
if(argv.length==2){

  console.log('请输入信源概率分布：（Ctrl+D） 退出输入');
  var i=0;
  console.log('p'+(i++)+':');
  stdin.on('data',(data)=>{

 
    console.log('p'+(i++)+':');
    p.push(data);
    stdin.on('end',()=>{      

      console.log('p=',p.toString('base64').split(":"));
      console.log('h(p)='+cal()+' bit');
       process.exit();
     });
   });
}
              
