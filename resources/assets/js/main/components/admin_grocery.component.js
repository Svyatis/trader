'use strict';

module.exports = angular
    .module('mainModule.adminGroceryComponent', [])
    .component('adminGroceryComponent', {
        templateUrl: '/templates/admin_grocery.template.html',
        controller: AdminGroceryCtrl,
        transclude: true,
        require: {
            data: '^appMain',
            main: '^adminComponent'
        }
    });

function AdminGroceryCtrl() {

}