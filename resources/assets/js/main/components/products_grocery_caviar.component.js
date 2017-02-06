'use strict';

/**
 * Export productsGroceryCaviarComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryCaviarComponent', [])
    .component('productsGroceryCaviarComponent', {
        templateUrl: '/templates/products_grocery_caviar.template.html',
        controller: ProductsGroceryCaviarCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryCaviarCtrl
 * @memberOf mainModule
 */
function ProductsGroceryCaviarCtrl(ngCart) {
    var $ctrl = this;
}