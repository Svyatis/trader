'use strict';

/**
 * Export productsGroceryMacaroniComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryMacaroniComponent', [])
    .component('productsGroceryMacaroniComponent', {
        templateUrl: '/templates/products_grocery_macaroni.template.html',
        controller: ProductsGroceryMacaroniCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryMacaroniCtrl
 * @memberOf mainModule
 */
function ProductsGroceryMacaroniCtrl(ngCart) {
}