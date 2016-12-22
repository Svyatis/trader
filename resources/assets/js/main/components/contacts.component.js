'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.contactsComponent', [])
    .component('contactsComponent', {
        templateUrl: '/templates/contacts.template.html',
        controller: ContactsCtrl
    });

/**
 * @name ContactsCtrl
 * @memberOf mainModule
 */
function ContactsCtrl() {
    var $ctrl = this;
}
