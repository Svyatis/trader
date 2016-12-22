'use strict';

/**
 * Export aboutComponent
 */
module.exports = angular
    .module('mainModule.aboutComponent', [])
    .component('aboutComponent', {
        templateUrl: '/templates/about.template.html',
        controller: AboutCtrl
});

/**
 * @name AboutCtrl
 * @memberOf aboutComponent
 */
function AboutCtrl() {
    var $ctrl = this;
}