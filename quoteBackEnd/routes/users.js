/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var newUser = require('../controllers/users');

/* POST new user in collection Mongo. */
router.post('/', function(req, res) {
  newUser.createUser(req, res);
});

module.exports = router;


