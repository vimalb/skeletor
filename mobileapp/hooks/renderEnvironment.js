#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var fs = require('fs');
var handlebars = require("node-handlebars");

var CLIENT_SETTINGS_TEMPLATE_FILE = "" + __dirname + "/../www/client.settings.template";
var CLIENT_SETTINGS_FILE = "" + __dirname + "/../www/client.settings.js";

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
