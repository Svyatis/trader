'use strict';

/**
 * Export productsWinesComponent
 */
module.exports = angular
    .module('mainModule.productsWinesComponent', [])
    .component('productsWinesComponent', {
        templateUrl: '/templates/products_wines.template.html',
        controller: ProductsWinesCtrl
    });

/**
 * @name ProductsWinesCtrl
 * @param TraderService
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesCtrl(TraderService, ngCart) {
    var $ctrl = this;

    TraderService.getProducts().get().$promise.then(function(data) {
        $ctrl.products = data.products;
    });
}