/* Modules imports */
var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport/index');


router.get('/', function(req, res) {
  req.logout();
  res.json({});
});

module.exports = router;