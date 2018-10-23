#!/usr/bin/node

const fs=require('fs');
//从命令行参数获取图片文件名
const file=process.argv[2];
//命令行参数的格式：cmd file_name

//命令行参数不正确时，提示用户命令行参数的正确格式
if(process.argv.length!=3){
  console.error('命令行参数格式：cmd file_name');
  process.exit();
}
//命令行参数的图片文件不存在时，提示错误信息
try{
  var buf=fs.readFileSync(file);
}catch(e){
  console.error(e.message);
  process.exit();
}
//获取图片的宽度、高度和颜色深度三个信息，并打印在控制台上
if(buf.toString('ascii',0,2)==='BM'){
  console.log('width:',buf.readInt32LE(0x12));
  console.log('height:',buf.readInt32LE(0x16));
  console.log('color depth:',buf.readUInt16LE(0x1c));
}
//buf.toString([encoding[, start[, end]]])
//encoding <string> 解码使用的字符编码。默认: 'utf8'
//start <integer> 开始解码的字节偏移量。默认: 0
//end <integer> 结束解码的字节偏移量（不包含）。 默认: buf.length
//返回: <string>
//根据 encoding 指定的字符编码解码 buf 成一个字符串。

//偏移量（十六进制）
//0x12                  位图宽度（以像素为单位）（有符号整数）
//0x16                  位图高度（以像素为单位）（有符号整数）
//0x1c                  每像素的位数，即图像的颜色深度。典型值                        为1,4,8,16,24和32。

//buf.readInt32LE(offset)从bufat读取带有指定端格式的指定偏移量的带符号32位整数（readInt32BE（）返回大端，readInt32LE（）返回小端）。
