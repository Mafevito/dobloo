const cors = require("cors");

module.exports = function(app) {
  var whitelist = ['http://localhost:4200'];
  var corsOptions = {
    origin: (origin, callback) => {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    },
    credentials: true
  };
  app.use(cors(corsOptions));
};
