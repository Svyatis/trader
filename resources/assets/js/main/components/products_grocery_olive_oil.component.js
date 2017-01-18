'use strict';

/**
 * Export productsGroceryOliveOilComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryOliveOilComponent', [])
    .component('productsGroceryOliveOilComponent', {
        templateUrl: '/templates/products_grocery_olive_oil.template.html',
        controller: ProductsGroceryOliveOilCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryOliveOilCtrl
 * @memberOf mainModule
 */
function ProductsGroceryOliveOilCtrl(ngCart) {
}