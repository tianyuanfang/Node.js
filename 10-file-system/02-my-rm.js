#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2];

fs.unlinkSync(file);//删除一个名称，也可能删除它引用的文件
