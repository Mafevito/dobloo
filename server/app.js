require('dotenv').config();
// const express = require('express');
// const path = require('path');
const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const layouts = require('express-ejs-layouts');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
const cors = require("cors");

//Pasado a config
// const dbUrl = process.env.MONGO_URL;
// console.time('db');
// mongoose.connect(dbUrl)
//   .then( () => {
//     console.log(`Connected to ${dbUrl}`);
//     console.timeEnd('db');
//   })
//   .catch( e => console.log(e));

const app = express();

var whitelist = ['http://localhost:4200'];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

//Pasado a config
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//Pasado a config
// app.locals.title = 'Express - Generated with IronGenerator';
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(layouts);

// app.use(session({
//   secret: 'angular auth passport secret shh',
//   resave: true,
//   saveUninitialized: true,
//   cookie : { httpOnly: true, maxAge: 2419200000 }
// }));

const passportLocalStrategy = require('./passport/local');
passportLocalStrategy(passport);

// app.use(passport.initialize());
// app.use(passport.session());

const authRoutes = require('./routes/auth');
const socilitudRoutes = require('./routes/solicitud');
app.use('/api/auth', authRoutes);
app.use('/api/solicitud', socilitudRoutes);

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

//Pasado a config-----
/*app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;
