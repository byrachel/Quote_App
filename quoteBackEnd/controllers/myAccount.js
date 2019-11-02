/*
 * myAccount controller
 */

var Users = require ('../models/Users')

var myAccount = {

    displayMyAccount: (req, res) => {
        if(req.user) {
            res.json({
                email: req.user.email,
                username: req.user.username,
                description: req.user.description,
                quotes: req.user.quotes,
                avatar: '../components/img/quote-icon.png'
            });
        }
        else {
            res.status(401).end();
        }
    }
}

module.exports = myAccount;