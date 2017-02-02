'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.mainComponent', [])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        var states = [
            { name: 'home', url: '/', component: 'homeComponent'},
            { name: 'about', url: '/about', component: 'aboutComponent'},
            { name: 'products', url: '/products', component: 'productsComponent'},
            { name: 'share', url: '/share', component: 'shareComponent'},
            { name: 'vip', url: '/vip', component: 'vipComponent'},
            { name: 'contacts', url: '/contacts', component: 'contactsComponent'},
            { name: 'basket', url: '/basket', component: 'basketComponent'},
            { name: 'admin', url: '/admin', component: 'adminComponent'},
            { name: 'login', url: '/login', component: 'loginComponent'}
        ];

        // Loop over the state definitions and register them
        states.forEach(function(state) {
            $stateProvider.state(state);
        });
    })
    .component('appMain', {
        templateUrl: '/templates/main.template.html',
        controller: MainCtrl,
        transclude: true
    });

    /**
     * @name MainCtrl
     * @param ngCart
     * @param $scope
     * @param $timeout
     * @param $location
     * @param API_URL
     * @param TraderService
     * @memberOf mainModule
     */
    function MainCtrl($scope, $location, ngCart, $timeout, TraderService, API_URL) {
        var $ctrl = this;
        $ctrl.products = {};
        $ctrl.path = API_URL;

        TraderService.getProducts().get().$promise.then(function(data) {
            $ctrl.wines = data.wines;
            $ctrl.groceries = data.groceries;
        });

        $scope.basket = function () {
            $scope.showBasket = !ngCart.isEmpty();
        };
        $scope.basket();

        $scope.$on('ngCart:change', function() {
            $scope.showBasket = !ngCart.isEmpty();
        });

        $scope.$on('selectedTab:changed', function() {
            $timeout(function() {
                $location.path('basket');
                $ctrl.selectedTab = $location.path();
            }, 300);
        });
    }