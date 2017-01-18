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
            { name: 'basket', url: '/basket', component: 'basketComponent'}
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
     * @param TraderService
     * @memberOf mainModule
     */
    function MainCtrl($scope, $location, ngCart, $timeout, TraderService) {
        var $ctrl = this;
        $ctrl.products = {};

        TraderService.getProducts().get().$promise.then(function(data) {
            $ctrl.wines = data.wines;
            $ctrl.grocery = data.grocery;
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