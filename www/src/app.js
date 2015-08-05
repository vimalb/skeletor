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
    API_TEST: ['$http', function ($http) {
      return $http.get('/api/test');
    }],
  }
});


})()

