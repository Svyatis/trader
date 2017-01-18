angular.module('app',
    [
        'ui.router',
        'ngResource',
        'ngCart',
        'ui.bootstrap',
        'mainModule'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .constant('API_URL', 'http://localhost:8000/api/');
