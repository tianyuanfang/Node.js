#!/usr/bin/node

var fs=require("fs");
var file=process.argv[2];
var buf=fs.readFileSync(file);

console.log("width:",buf.readInt32LE(0x12));
console.log("height:",buf.readInt32LE(0x16));
console.log("color deapth:",buf.readInt32LE(0x1c));
