/**
 * Created by Tonny Cardenas / 30-10-2020
 */
(function () {
    "use strict";
    
    var app = angular.module("AppExamen", ['ngRoute', 'toastr', 'ui-bootstrap']);
    
    app.constant("CONFIG_API", 
			{
		 		ApiUrl: "http://localhost:4000/api/v1",
            });
            
    app.constant('ROUTE', {
        'CLIENT'            : '/client'
    });

    app.config(['$routeProvider', function( $routeProvider ){

        $routeProvider
            .when("/", {
                templateUrl: "clientlist.html",
                controller: 'ClientController',
                controllerAs: 'cli'
            })
            .when("/client/:id", {
                templateUrl: "app/views/client.html",
                controller: 'ClientController',
                controllerAs: 'cli'
            })
            .otherwise({
                redirectTo: '/'
            });
      
    }]);

    // app.config( function($controllerProvider) {
    //     $controllerProvider.register('ClientController');
    // });
    
    // app.run(function($rootScope) {
    // 	   $rootScope.$on('$routeChangeSuccess', function(ev,data) {   
    // 	     if (data.$route && data.$route.controller)
    // 	       $rootScope.controller = data.$route.controller;
    // 	   });
    // });
        
}());

