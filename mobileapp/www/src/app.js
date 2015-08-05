document.APP_MODULES = document.APP_MODULES || [];

(function() {

ALL_MODULES = [ 'ionic' ].concat(document.APP_MODULES);

angular.module('mainApp', ALL_MODULES)
    .config(function($urlRouterProvider) {
      //CONFIG: Default URL is here
      $urlRouterProvider.otherwise('/tab/dash');
    })
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }
      });
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
    SOCKET_IO_CLIENT: ['$http', '$q', function ($http, $q) {
      var deferred = $q.defer();
      $.getScript(document.CLIENT_SETTINGS.SERVER_URL+'/socket.io/socket.io.js', function() {
          deferred.resolve();
      });
      return deferred.promise;
    }],
  }
});
    

})()