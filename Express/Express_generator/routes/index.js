var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World it\'s Hasnae AHOUZI', subtitle: "hello to my first express engine templating building ever using jade" });
});

router.get('/express', function(req, res, next) {
  //console.log(req.query.template);
  var templateEngineName = req.query.template;
  var MyName = "Hasnae AHOUZI"
  let titleName = "Hello World it\'s " + MyName;
  res.render('index', { title: titleName, subtitle: "hello to my first express engine templating building ever using "+ templateEngineName });
});

module.exports = router;
