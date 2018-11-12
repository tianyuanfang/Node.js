#!/usr/bin/node

const http=require('http'),
      fs=require('fs');

http.createServer((req,res)=>{
  console.log(`起始行：${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log();

  if(req.url=='/' && req.method=='GET'){
    show(req,res,uploadPage);
    return;
  }

  if(req.url=='/upload' && req.method=='POST'){
    var data='';
    req.setEncoding('binary');//所有文件都可看成二进制文件
    req.on('data',chunk=>{
      data+=chunk;
    }); 
    req.on('end',()=>{
      console.log(data); 
      //console.log(data.split('\r\n'));
      var das=data.split('\r\n');
      var fileData=das[4];
      var fileName=das[1].split(';')[2].split('=')[1];
      fileName=fileName.slice(1,fileName.length-1);
      console.log('file name:',fileName);
      console.log('file data:',fileData);
      fs.writeFileSync(fileName,fileData,'binary');
    });
      
    show(req,res,backPage);
   
   }else{
     if(req.url=='/'){
       show(req,res,uploadPage);
     }else{
       show(req,res,errPage);     
     }
   } 
}).listen(8080);

function show(req,res,page){
  res.statusCode=(page=='errPage'?404:200);
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(page));

  res.end(page);
}

var uploadPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
    + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>Upload File</title>'
    + '</head>'
    + '<body>'
      + '<h1>Upload File</h1>'
      + '<form method="POST" enctype="multipart/form-data" action="/upload">'
        + '<input type="file" name="upload" multiple="multiple">'
        + '<input type="submit" value="submit">'
      + '</form>'
    + '</body>'
    + '</html>';

var backPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
    + '<head>'
       + '<meta charset="UTF-8">'
       + '<title>Back</title>'
    + '</head>'
    + '<body>'
      + '<h1>Upload File OK!</h1>'
      + '<a href="/">continue to upload</a>'
    + '</body>'                                                      + '</html>';

var errPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
      + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>Error</title>'
    + '</head>'
    + '<body>'
      + '<h1>Sorry! There is  nothing!</h1>'
      + '<a href="/">back to upload file</a>'
    + '</body>'                                                      + '</html>';


                                                                                               
                                                                                                                                                                   
