'use strict';

/**
 * Export vipComponent
 */
module.exports = angular
    .module('mainModule.vipComponent', [])
    .component('vipComponent', {
        templateUrl: '/templates/vip.template.html',
        controller: VipCtrl
    });

/**
 * @name VipCtrl
 * @memberOf mainModule
 */
function VipCtrl() {
    var $ctrl = this;
}
