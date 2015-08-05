document.APP_MODULES = document.APP_MODULES || [];

(function(){

var FILTER_URL = document.currentScript.src;

var MODULE_NAME = 'mainApp'+URI(FILTER_URL).path().replace('/src','').replace('/filter.js','').replace(/\//g,'.');
var FILTER_NAME = URI(FILTER_URL).path().replace('/src/filters/','').replace('/filter.js','').replace(/\//g,'');

document.APP_MODULES.push(MODULE_NAME);

console.log(MODULE_NAME, "Registering filter", FILTER_NAME);
angular.module(MODULE_NAME, [])
  .filter(FILTER_NAME, function($http) {
    console.log("Loading filter", FILTER_NAME);
    
    return function(text) {
        return "I can haz "+text;
    }
    
  });
  
  
})();