var API_URL = process.env.API_URL || "http://localhost:3000";
var APP_URL = process.env.APP_URL || "http://localhost:5000";

var _ = require('lodash-node');
var q = require('q');
var url = require('url');
var express = require('express');
var gzippo = require('gzippo');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var parse = require('csv-parse');
var proxy = require('express-http-proxy');
var jcopy = function(x){return JSON.parse(JSON.stringify(x));}
var wait = function(duration_ms){
  var deferred = q.defer();
  setTimeout(function(){
    deferred.resolve();
  }, duration_ms);
  return deferred.promise;
}



var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(logger('dev'));


console.log("Starting server");
server.listen(process.env.PORT || 5000, function(){
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



app.use('/api', proxy(API_URL, {
  forwardPath: function(req, res) {
    return '/api'+require('url').parse(req.url).path;
  }
}));

app.use(gzippo.staticGzip("" + __dirname + "/www"));


io.on('connection', function (socket) {
  socket.emit('hello', {'hello':'nice to have you'});
});

