'use strict';

/**
 * Export productsGroceryComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryComponent', [])
    .component('productsGroceryComponent', {
        templateUrl: '/templates/products_grocery.template.html',
        controller: ProductsGroceryCtrl
    });

/**
 * @name ProductsGroceryCtrl
 * @memberOf mainModule
 */
function ProductsGroceryCtrl() {

}