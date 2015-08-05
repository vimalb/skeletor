document.APP_MODULES = document.APP_MODULES || [];

(function(){

var CONTROLLER_URL = document.currentScript.src;
var TEMPLATE_URL = CONTROLLER_URL.replace('controller.js','view.html');

var ROUTE_URL = '/landing';
var MODULE_NAME = 'mainApp'+URI(CONTROLLER_URL).path().replace('/src','').replace('/controller.js','').replace(/\//g,'.');
var CONTROLLER_NAME = MODULE_NAME.replace(/\./g,'_');
document.APP_MODULES.push(MODULE_NAME);

console.log(MODULE_NAME, "Registering route", ROUTE_URL);
angular.module(MODULE_NAME, ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when(ROUTE_URL, {
      templateUrl: TEMPLATE_URL,
      controller: CONTROLLER_NAME
    });
  })
  .controller(CONTROLLER_NAME, function($scope, CLIENT_SETTINGS) {
    console.log("Loading controller", CONTROLLER_NAME);
    
    console.log("Client Settings", CLIENT_SETTINGS);
    $scope.test = 'hello world';
    
  });
  
  
})();