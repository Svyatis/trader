'use strict';

/**
 * Export shareComponent
 */
module.exports = angular
    .module('mainModule.shareComponent', [])
    .component('shareComponent', {
        templateUrl: '/templates/share.template.html',
        controller: ShareCtrl
    });

/**
 * @name ShareCtrl
 * @memberOf mainModule
 */
function ShareCtrl() {
    var $ctrl = this;
}
