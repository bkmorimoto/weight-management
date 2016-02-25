var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Week = mongoose.model('Week');
var Day = mongoose.model('Day');
var Weight = mongoose.model('Weight');
var Workout = mongoose.model('Workout');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
