'use strict';

/**
 * Export productsGroceryComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.grocery.caviar', { url: '/caviar', component: 'productsGroceryCaviarComponent' })
            .state('products.grocery.cheese', { url: '/cheese', component: 'productsGroceryCheeseComponent' })
            .state('products.grocery.coffee', { url: '/coffee', component: 'productsGroceryCoffeeComponent' })
            .state('products.grocery.macaroni', { url: '/macaroni', component: 'productsGroceryMacaroniComponent' })
            .state('products.grocery.olive_oil', { url: '/olive_oil', component: 'productsGroceryOliveOilComponent' })
            // .state('products.grocery.detailed', {url: '/:id', component: 'detailedComponent'})
    })
    .component('productsGroceryComponent', {
        templateUrl: '/templates/products_grocery.template.html',
        controller: ProductsGroceryCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryCtrl
 * @memberOf mainModule
 */
function ProductsGroceryCtrl(ngCart) {
}