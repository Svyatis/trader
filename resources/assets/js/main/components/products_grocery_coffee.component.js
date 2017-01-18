'use strict';

/**
 * Export productsGroceryCoffeeComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryCoffeeComponent', [])
    .component('productsGroceryCoffeeComponent', {
        templateUrl: '/templates/products_grocery_coffee.template.html',
        controller: ProductsGroceryCoffeeCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryCtrl
 * @memberOf mainModule
 */
function ProductsGroceryCoffeeCtrl(ngCart) {
}