#!/usr/bin/node

const http=require('http'),
      cheerio=require('cheerio');// cheerio 是一个Node.js的库,它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询

var addr='http://edu.51cto.com/courselist/index-zh5.html';

http.get(addr,res=>{
  var html='';
  res.on('data',data=>{//获取页面数据
    html+=data;
  });

  res.on('end',()=>{
    var $=cheerio.load(html);

    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text(),
          cTime=$(this).find('p.fl').text(),
          cTarget=$(this).find('div.course_target').text(),
          cURL=$(this).find('a').attr('href');
     
      if(cTime==''){
        return;
      }

      console.log('课程名称：',cName.trim());//trim()的作用是去掉字符串两端的多余的空格
      console.log('课程时长：',cTime.trim());
      console.log('教学目标：',cTarget.trim());
      console.log('课程地址：',cURL.trim());
      console.log();
    });
  });
});
