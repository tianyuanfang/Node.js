var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World!' });//更改view/index.ejs模板中变量
});

module.exports = router;
