const TodoList=require('../models/todo.js');
var express = require('express');
var router = express.Router();

var todo=new TodoList();
var items=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  todo.getAll((err,items)=>{
    if(err){
      res.status(500).send('DB error!');
    }
    res.render('index',{items:items});
  });
 });

router.post('/',function(req,res,next){
  if(req.body.item!='') {
    todo.addItem(req.body.item,err=>{
      if(err){
        res.status(500).send('DB error');
        return;
      }
    });
  }
   todo.getAll((err,items)=>{
      if(err){
        res.status(500).send('DB error');
        return;
      }
      res.render('index',{items:items});    
   });
 });

module.exports = router;
