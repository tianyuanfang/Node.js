#!/usr/bin/node

const fs=require('fs');

var src=process.argv[2],
<<<<<<< HEAD
      lnk=process.argv[3];

fs.symlinkSync(src,lnk);//符号链接
=======
	lnk=process.argv[3];

fs.symlinkSync(src,lnk);//符号链接
>>>>>>> 754e3877e80a5b13344e455161d5162dca3b5240
