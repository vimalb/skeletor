var url = require('url');
var express = require('express');
var gzippo = require('gzippo');
var logger = require('morgan');



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



