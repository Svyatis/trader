'use strict';

/**
 * Export productsComponent
 */
module.exports = angular
    .module('mainModule.productsComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.wines', { url: '/wines', component: 'productsWinesComponent' })
            .state('products.grocery', { url: '/grocery', component: 'productsGroceryComponent' })
            .state('products.detailed', { url: '/:id', component: 'detailedComponent'})
    })
    .component('productsComponent', {
        templateUrl: '/templates/products.template.html',
        controller: ProductsCtrl,
        transclude: true,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsCtrl(ngCart) {
    var $ctrl = this;
}