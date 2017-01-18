'use strict';

/**
 * Export productsWinesSparklingComponent
 */
module.exports = angular
    .module('mainModule.productsWinesSparklingComponent', [])
    .component('productsWinesSparklingComponent', {
        templateUrl: '/templates/products_wines_sparkling.template.html',
        controller: ProductsWinesSparklingCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesSparklingCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function ProductsWinesSparklingCtrl(ngCart) {
    var $ctrl = this;

}