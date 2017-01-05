'use strict';

/**
 * Export productsWinesComponent
 */
module.exports = angular
    .module('mainModule.productsWinesComponent', [])
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

    this.$onInit = function () {
        $ctrl.products = $ctrl.main.products;
    };
}