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
                {path: '/products', name: 'Products', component: 'productsComponent'},
                {path: '/share', name: 'Share', component: 'shareComponent'},
                {path: '/vip', name: 'Vip', component: 'vipComponent'},
                {path: '/contacts', name: 'Contacts', component: 'contactsComponent'},
                {path: '/basket', name: 'Basket', component: 'basketComponent'}
            ]
    });

    /**
     * @name MainCtrl
     * @param ngCart
     * @param $scope
     * @param $rootScope
     * @param $location
     * @memberOf mainModule
     */
    function MainCtrl($scope, $location, ngCart) {
        var $ctrl = this;
        ngCart.setTaxRate(9.5);
        ngCart.setShipping(7.99);

        /**
         * @name function go
         * @desc highlight nav tabs
         * @memberOf MainCtrl
         */
        $ctrl.go = function(path) {
            $location.path(path);
            $ctrl.selectedTab = $location.path();
        };

        $scope.basket = function () {
            $scope.showBasket = !ngCart.isEmpty();
        };
        $scope.basket();

        $scope.$on('ngCart:change', function() {
            $scope.showBasket = !ngCart.isEmpty();
        });

    }