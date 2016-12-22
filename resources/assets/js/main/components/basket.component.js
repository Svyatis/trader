'use strict';

/**
 * Export basketComponent
 */
module.exports = angular
    .module('mainModule.basketComponent', [])
    .component('basketComponent', {
        templateUrl: '/templates/basket.template.html',
        controller: BasketCtrl
    });

/**
 * @name BasketCtrl
 * @param ngCart
 * @memberOf mainModule
 */
function BasketCtrl(ngCart) {
    var $ctrl = this;

}
