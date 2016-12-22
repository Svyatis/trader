var angular = require('angular');
    require('./main/main.module.js');
    require('@angular/router/angular1/angular_1_router');
    require('angular-resource');
    require('ngCart/dist/ngCart');
    require('angular-ui-bootstrap');

angular.module('app',
    [
        'mainModule',
        'ngComponentRouter',
        'ngResource',
        'ngCart',
        'ui.bootstrap'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .constant('API_URL', 'http://localhost:8000/api/')
    .value('$routerRootComponent', 'appMain');
