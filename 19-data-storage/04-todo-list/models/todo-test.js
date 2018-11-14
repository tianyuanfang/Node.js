const TodoList=require('../models/todo.js');

var todo=new TodoList();

todo.addItem('游泳',(err)=>{
  if(err) console.error(err);
});

todo.getAll((err,items)=>{
  if(err){
    console.error(err);
    process.exit();
  }
  console.log(items);
});
