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
        },
        bindings: {
            data: '<'
        }
    });

/**
 * @name DetailedCtrl
 * @memberOf mainModule
 */
function DetailedCtrl(ngCart, $stateParams) {
    var $ctrl = this;
    $ctrl.quan = $stateParams.quan;
    $ctrl.doBack = function() {
        window.history.back();
    }
}
