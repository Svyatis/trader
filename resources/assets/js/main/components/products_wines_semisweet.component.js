'use strict';

/**
 * Export productsWinesSemisweetComponent
 */
module.exports = angular
    .module('mainModule.productsWinesSemisweetComponent', [])
    .component('productsWinesSemisweetComponent', {
        templateUrl: '/templates/products_wines_semisweet.template.html',
        controller: ProductsWinesSemisweetCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesSemisweetCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesSemisweetCtrl(ngCart) {
    var $ctrl = this;

}