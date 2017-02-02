'use strict';

/**
 * Export productsGroceryCheeseComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryCheeseComponent', [])
    .component('productsGroceryCheeseComponent', {
        templateUrl: '/templates/products_grocery_cheese.template.html',
        controller: ProductsGroceryCheeseCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryCheeseCtrl
 * @memberOf mainModule
 */
function ProductsGroceryCheeseCtrl(ngCart, $state) {
    var $ctrl = this;
    $ctrl.go = function(id) {
        $state.go('products.grocery.detailed', {id: id});
    }
}