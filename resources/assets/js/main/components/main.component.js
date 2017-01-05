'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.mainComponent', [])
    .component('appMain', {
        templateUrl: '/templates/main.template.html',
        controller: MainCtrl,
        transclude: true,
        $routeConfig:
            [
                {path: '/', name: 'Home', component: 'homeComponent', useAsDefault: true},
                {path: '/about', name: 'About', component: 'aboutComponent'},
                {path: '/products/...', name: 'Products', component: 'productsComponent'},
                {path: '/share', name: 'Share', component: 'shareComponent'},
                {path: '/vip', name: 'Vip', component: 'vipComponent'},
                {path: '/contacts', name: 'Contacts', component: 'contactsComponent'},
                {path: '/basket', name: 'Basket', component: 'basketComponent'},
                {path: '**', component: 'homeComponent'}
            ]
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
            $ctrl.products = data.products;
        });

        $ctrl.class = function(path) {
            return (path == $location.path());
        };

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