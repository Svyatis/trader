'use strict';

/**
 * Export productsWinesDryComponent
 */
module.exports = angular
    .module('mainModule.productsWinesDryComponent', [])
    .component('productsWinesDryComponent', {
        templateUrl: '/templates/products_wines_dry.template.html',
        controller: ProductsWinesDryCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesDryCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesDryCtrl(ngCart) {
    var $ctrl = this;

}