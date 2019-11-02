/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var myAccount = require('../controllers/myAccount');

/* GET display user account. */
router.get('/', function(req, res) {
    myAccount.displayMyAccount(req, res);
});


module.exports = router;
