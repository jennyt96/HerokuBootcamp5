var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.config || 8080, function() {
    console.log('App listening on port', process.env.config || 8080);
  });
};