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
function ProductsGroceryCaviarCtrl(ngCart, $state) {
    var $ctrl = this;
    $ctrl.go = function(id) {
        $state.go('products.grocery.detailed', {id: id});
    }
}