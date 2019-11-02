/*
 * newQuote controller
 */

var Quote = require('../models/quotes');

var addQuote = {

    newQuote: (req, res) => {
        var quoteData = req.body.quotes;
        var createNewQuote = new Quote ({
            author: quoteData.author,
            quote: quoteData.quote,
            postedBy: req.user.username,
            category: quoteData.category,
        }
        );
        createNewQuote.save((error) => {
            if(error) {
                res.status(500).json({message: "Oups ! "});
                return;
            }
            res.json({message: "La citation est enregistrée :)"});
        });
    },
}

module.exports = addQuote;