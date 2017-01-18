'use strict';

/**
 * Export productsWinesComponent
 */
module.exports = angular
    .module('mainModule.productsWinesComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.wines.sparkling', { url: '/sparkling', component: 'productsWinesSparklingComponent' })
            .state('products.wines.dry', { url: '/dry', component: 'productsWinesDryComponent' })
            .state('products.wines.sweet', { url: '/sweet', component: 'productsWinesSweetComponent' })
    })
    .component('productsWinesComponent', {
        templateUrl: '/templates/products_wines.template.html',
        controller: ProductsWinesCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesCtrl(ngCart) {
    var $ctrl = this;
}