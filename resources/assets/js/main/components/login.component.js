'use strict';

/**
 * Export loginComponent
 */
module.exports = angular
    .module('mainModule.loginComponent', [])
    .component('loginComponent', {
        templateUrl: '/templates/login.template.html',
        controller: LoginCtrl
    });

/**
 * @name LoginCtrl
 * @memberOf mainModule
 */
function LoginCtrl($state, LoginService) {
    var $ctrl = this;

    if(sessionStorage.LoggedIn) {
        $state.go('admin');
    }

    $ctrl.formSubmit = function() {
        if(LoginService.login($ctrl.username, $ctrl.password)) {
            $ctrl.error = '';
            $ctrl.username = '';
            $ctrl.password = '';
            sessionStorage.LoggedIn = 'Yes';
            $state.go('admin');
        } else {
            $ctrl.error = "Incorrect username/password !";
        }
    };
}
