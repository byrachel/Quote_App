/*
 * Users Model
 */

/* Mongoose import */
const mongoose = require('mongoose');

/* Bcrypt import */
const bcrypt = require('bcryptjs');

/* Modèle : données de chaque utilisateur */
const UserSchema = new mongoose.Schema({
    avatar: String,
    username: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: false },
    password: String,
    description: String,
    quotes: Array
});

// PASSWORD : Instancie les 2 méthodes qui permettent :
// 1. Comparer le mot de passe saisi à celui stocké dans la BDD
// 2. Transformer le mot de passe saisi en MDP encrypté
UserSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: function(plainTextPassword) {
        return bcrypt.hashSync(plainTextPassword, 10);
    }
}

UserSchema.pre('save', function(next) {
    if (!this.password) {
        console.log(this);
        next();
    } else {
        console.log('hash: ' + this.hashPassword(this.password));
        this.password = this.hashPassword(this.password);
        next();
    }
});


module.exports = mongoose.model('Users', UserSchema);