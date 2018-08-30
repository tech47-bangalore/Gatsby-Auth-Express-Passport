var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dburi = require('./config/mongodburi')
var mongoose = require('mongoose');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);
var flash = require('express-flash');

var app = express();

mongoose.connect(bduri.mongodb.dbURI, () => {
	console.log('connect to mongodb')
});

var user = require('./controllers/user');

require('./config/passport')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use(session({
    secret: 'Secretkey',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(user);

app.listen(4000, function () {
    console.log("Listening on port 4000");
})