#!/usr/bin/node

const pid=process.argv[2];
const sig=process.argv[3];

//const pid=process.pid;
//const sig=process.argv[2];
//check pid and sig
process.kill(pid,sig);
