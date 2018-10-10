#!/usr/bin/node

const Readable=require('stream').Readable;//类

var src=new Readable();//信源

src.push('hello');
src.push('world');
src.push(null);

src.pipe(process.stdout);
