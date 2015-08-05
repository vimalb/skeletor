document.APP_MODULES = document.APP_MODULES || [];

(function() {

ALL_MODULES = [ 'ngRoute',
            'ngMaterial',
            'ngTouch',
            'angular-carousel',
            'nouislider' ].concat(document.APP_MODULES);

angular
  .module('mainApp',
          ALL_MODULES
          )
  .config(function($routeProvider, $mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('deep-purple')
                .accentPalette('indigo');
            $routeProvider.otherwise({redirectTo: '/landing'});
          });

deferredBootstrapper.bootstrap({
  element: document.body,
  module: 'mainApp',
  resolve: {
    CLIENT_SETTINGS: ['$http', '$q', function ($http, $q) {
      var deferred = $q.defer();
      deferred.resolve(document.CLIENT_SETTINGS);
      return deferred.promise;
    }],
  }
});


})()

