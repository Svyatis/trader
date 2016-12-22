'use strict';

/**
 * Export productsComponent
 */
module.exports = angular
    .module('mainModule.productsComponent', [])
    .component('productsComponent', {
        templateUrl: '/templates/products.template.html',
        controller: ProductsCtrl
    });

/**
 * @name ProductsCtrl
 * @param TraderService
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsCtrl(TraderService, ngCart) {
    var $ctrl = this;

    TraderService.getProducts().get().$promise.then(function(data) {
        $ctrl.products = data.products;
    });
}