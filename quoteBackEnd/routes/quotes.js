/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var flow = require('../controllers/flow');
var addQuote = require('../controllers/addQuote');

/* GET display quotes in flow. */
router.get('/flow', function(req, res) {
    flow.displayQuotes(req, res);
});

/* GET display quotes in user profil. */
router.get('/myquote/', function(req, res) {
    flow.displayUserQuote(req, res);
});

/* POST create new quote. */
router.post('/', function(req, res) {
    addQuote.newQuote(req, res);
});

module.exports = router;