document.APP_MODULES = document.APP_MODULES || [];

(function(){

var DIRECTIVE_URL = document.currentScript.src;

var MODULE_NAME = 'mainApp'+URI(DIRECTIVE_URL).path().replace('/src','').replace('/directive.js','').replace(/\//g,'.');
var DIRECTIVE_NAME = URI(DIRECTIVE_URL).path().replace('/src/directives/','').replace('/directive.js','').replace(/\//g,'');

document.APP_MODULES.push(MODULE_NAME);

console.log(MODULE_NAME, "Registering directive", DIRECTIVE_NAME);
angular.module(MODULE_NAME, [])
  .directive(DIRECTIVE_NAME, function($http) {
    console.log("Loading directive", DIRECTIVE_NAME);
    
    return function(scope, elm, attrs) {
        elm.text("Yaaaarrrrr! "+elm.text());
    };
  });
  
  
})();