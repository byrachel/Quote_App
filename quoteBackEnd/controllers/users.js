/*
 * newUser controller
 */

var User = require('../models/Users');

var newUser = {

    createUser: (req, res) => {
        var userData = req.body.user;
        var createNewUser = new User ({
            avatar: null,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            description: null,
            quotes: []
        }
        );
        createNewUser.save((error) => {
            if(error) {
                res.status(500).json({message: "Oups ! "});
                return;
            }
            res.json({message: "Bravo. Votre compte est créé."});
        });
    },


}

module.exports = newUser;