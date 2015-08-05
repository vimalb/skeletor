var fs = require('fs');
var express = require('express');
var gzippo = require('gzippo');
var logger = require('morgan');
var handlebars = require("node-handlebars");


var CLIENT_SETTINGS_TEMPLATE_FILE = "" + __dirname + "/mobileapp/www/client.settings.template";
var CLIENT_SETTINGS_FILE = "" + __dirname + "/mobileapp/www/client.settings.js";
handlebars.create().engine(CLIENT_SETTINGS_TEMPLATE_FILE, {env: JSON.parse(JSON.stringify(process.env))}, function(err, output) {
  if (err) {
    throw err;
  }
  fs.writeFile(CLIENT_SETTINGS_FILE, output, function(err) {
    if(err) {
      throw err;
    }
    console.log(CLIENT_SETTINGS_FILE, "rendered");
  });
}); 



var app = express();
var server = require('http').Server(app);

app.use(logger('dev'));


console.log("Starting server");
server.listen(process.env.PORT || 4000, function(){
  console.log("Server started");
});

var shutdown = function(){
  console.log("Shutting down server");
  process.exit();
}
// TERM signal .e.g. kill 
process.on('SIGTERM', shutdown);
// INT signal e.g. Ctrl-C
process.on('SIGINT', shutdown);  


app.get('/', function (req, res) {
    res.redirect('/kwyjibo/index.html');
});

app.use('/kwyjibo', gzippo.staticGzip("" + __dirname + "/mobileapp/www"));



