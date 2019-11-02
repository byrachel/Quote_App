/*
 * Quotes Model
 */

/* Mongoose import */
const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({
    author: String,
    quote: String,
    postedBy: String,
    category: String,
});

module.exports = mongoose.model('Quotes', QuotesSchema);