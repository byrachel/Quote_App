/* Modules imports */
var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport/index');

/* POST permet de connecter l'utilisateur. */
router.post('/', passport.authenticate('local'), function(req, res) {

    var dataUser = req.user;

    if(req.user) {
        console.log(dataUser);
        res.json({
            message: "Vous êtes connecté.",
            user: dataUser
        });
    }

});

module.exports = router;