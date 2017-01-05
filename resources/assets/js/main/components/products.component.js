'use strict';

/**
 * Export productsComponent
 */
module.exports = angular
    .module('mainModule.productsComponent', [])
    .component('productsComponent', {
        templateUrl: '/templates/products.template.html',
        controller: ProductsCtrl,
        transclude: true,
        $routeConfig:
            [
                {path: '/wines', name: 'Wines', component: 'productsWinesComponent', useAsDefault: true},
                {path: '/grocery', name: 'Grocery', component: 'productsGroceryComponent'}
            ]
    });

/**
 * @name ProductsCtrl
 * @param ngCart
 * @param $location
 * @memberOf mainModule
 */
function ProductsCtrl(ngCart, $location) {
    var $ctrl = this;
    $ctrl.class = function(path) {
        return (path == $location.path());
    };
}