'use strict';

/**
 * Export traderService
 */
module.exports = angular
    .module('mainModule.loginService', [])
    .service('LoginService', LoginService);

/**
 * @name LoginService
 * @desc service for login
 */
function LoginService() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;

    return {
        login : function(username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        isAuthenticated : function() {
            return isAuthenticated;
        }
    };
}