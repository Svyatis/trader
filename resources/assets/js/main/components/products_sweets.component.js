'use strict';

/**
 * Export productsSweetsComponent
 */
module.exports = angular
    .module('mainModule.productsSweetsComponent', [])
    .component('productsSweetsComponent', {
        templateUrl: '/templates/products_sweets.template.html',
        controller: ProductsSweetsCtrl
    });

/**
 * @name ProductsSweetsCtrl
 * @memberOf mainModule
 */
function ProductsSweetsCtrl() {
}