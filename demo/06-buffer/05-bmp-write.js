#!/usr/bin/node

const fs=require('fs');
//从命令行参数获取图片文件名
const file=process.argv[2];
//命令行参数的格式：cmd file_name

//命令行参数不正确时，提示用户命令行参数的正确格式
try{
  var data=fs.readFileSync(file);
}catch(e){
  console.error(e.message);
  process.exit();
}
//写一个 16 * 16 像素，颜色深度为 32 位的位图文件
const width=16,height=16;
var pixelByteSize=width*height*4;
var totalSize = pixelByteSize + 54;
var buf = new Buffer(totalSize);
buf.fill(0);
//位图的所有像素为蓝色
// head
buf.write('BM');
buf.writeUInt32LE(totalSize, 0x02);
buf.writeUInt32LE(54, 0x0a);
buf.writeUInt32LE(40, 0x0e);
buf.writeUInt16LE(1, 0x1a);
buf.writeUInt32LE(32, 0x1c);
buf.writeUInt32LE(pixelByteSize, 0x22);
buf.writeInt32LE(width, 0x12);
buf.writeInt32LE(height, 0x16);
// data
for(var i=54; i<totalSize; i+=4) {
  buf.writeUInt32LE(0xff0000ff, i);
}

fs.writeFile('./out.bmp', buf, (err) => {
    if(err != null) {
       console.error(err);
       process.exit(1);
    }
});
