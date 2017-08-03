const express = require('express');
const passport = require('passport');

require('dotenv').config();
const app = express();

require('./passport/local')(passport);
require('./config/express')(app);
require('./config/cors')(app);

const authRoutes = require('./routes/auth');
const socilitudRoutes = require('./routes/solicitude');
app.use('/api/auth', authRoutes);
app.use('/api/solicitude', socilitudRoutes);

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

require('./config/error-handler')(app);

module.exports = app;
