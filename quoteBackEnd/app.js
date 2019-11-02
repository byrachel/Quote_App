/* Import modules */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var package = require('./package.json');
var passport = require('./helpers/passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

/* Import middlewares */
var cors = require('./middlewares/cors');

/* Import routes */
var newUserRouter = require('./routes/users');
var myAccountRouter = require('./routes/myAccount');
var logoutRouter = require('./routes/logout');
var loginRouter = require('./routes/login');
var flowRouter = require('./routes/quotes');
var myQuoteRouter = require('./routes/quotes');
var addQuoteRouter = require('./routes/quotes');

/* Create app */
var app = express();

/* Configuration */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* CORS */
app.use(cors.handle);

/* XHR filter */
app.use((req, res, next) => {
    if(!req.xhr) {
        return res.status(405).end();
    }
    next();
});

/* Get database address */
var database = process.env.DB || 'mongodb://localhost:27017/' + package.name;

/* Connect database and listen on provided port, on all network interfaces. */
mongoose.connect(database, {useNewUrlParser: true});

mongoose.connection.on('error', () => {
  console.log("Database connection error");
});

// Sessions
app.use(
    session({
        secret: 'mydevsecretkey',
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        resave: false,
        saveUninitialized: false
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

/* Routes */
app.use('/users', newUserRouter);
app.use('/myAccount', myAccountRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/quotes/flow', flowRouter);
app.use('/quotes/myquote/', myQuoteRouter);
app.use('/quotes', addQuoteRouter);

module.exports = app;
