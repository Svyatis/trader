'use strict';

/**
 * Export detailedComponent
 */
module.exports = angular
    .module('mainModule.detailedComponent', [])
    .component('detailedComponent', {
        templateUrl: '/templates/detailed.template.html',
        controller: DetailedCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name DetailedCtrl
 * @memberOf mainModule
 */
function DetailedCtrl(ngCart, $stateParams, TraderService) {
    var $ctrl = this;

    TraderService.getDetailedProduct($stateParams.id).get().$promise.then(function(response) {
        $ctrl.product = response.product;
    })
}
