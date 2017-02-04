var app = angular.module('app',
    [
        'ui.router',
        'ngResource',
        'ngCart',
        'ui.bootstrap',
        'ngCookies',
        'xeditable',
        'angularFileUpload',
        'ngFileUpload',
        'angular-slider-easy',
        'ui-rangeSlider',
        'angularUtils.directives.dirPagination',
        'mainModule'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .constant('API_URL', 'http://localhost:8000/api/')
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });