'use strict';

/**
 * Export productsWinesSweetComponent
 */
module.exports = angular
    .module('mainModule.productsWinesSweetComponent', [])
    .component('productsWinesSweetComponent', {
        templateUrl: '/templates/products_wines_sweet.template.html',
        controller: ProductsWinesSweetCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesSweetCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesSweetCtrl(ngCart) {
    var $ctrl = this;

}