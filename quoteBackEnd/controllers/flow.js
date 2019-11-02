/*
 * quotes controller
 */

var Quotes = require ('../models/quotes')
var Users = require ('../models/Users')

var flow = {

    displayQuotes: (req,res) => {

        Quotes.find({}, (error, data) => {
            if(error) {
                res.status(418).json({quotes: []});
                return;
            }
            res.json({quotes: data});
        })
    },

    displayUserQuote: (req,res) => {

    Quotes.find({postedBy : req.user.username }, (error, data) => {
        if(error) {
            res.status(500).json({quotes: []});
            return;
        }
        console.log(data);
        res.json({quotes: data});
        }
    )}
}


module.exports = flow;