'use strict';

module.exports = angular
    .module('mainModule.adminWineComponent', [])
    .component('adminWineComponent', {
        templateUrl: '/templates/admin_wine.template.html',
        controller: AdminWineCtrl,
        transclude: true,
        require: {
            data: '^appMain',
            main: '^adminComponent'
        }
    });

function AdminWineCtrl(TraderService, $state, API_URL, Upload) {
    var $ctrl = this;
}