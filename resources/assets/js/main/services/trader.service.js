'use strict';

/**
 * Export traderService
 */
module.exports = angular
    .module('mainModule.traderService', ['ngResource'])
    .service('TraderService', TraderService);

/**
 * @name TraderService
 * @desc service for requesting REST
 * @param $resource
 * @param API_URL
 */
function TraderService($resource, API_URL) {

    /**
     * @name function getWines
     * @desc sends request for all contacts
     */
    this.getProducts = function() {
        return $resource(API_URL + 'products')
    };

    /**
     * @name function getGrocery
     * @desc sends request for all grocery
     */
    this.getGrocery = function() {
        return $resource(API_URL + 'grocery')
    };

    /**
     * @name function getContacts
     * @desc get one contact by id
     * @param id
     */
    this.getDetail = function(id) {
        return $resource(API_URL + 'contact/' + id);
    };

    /**
     * @name function getContacts
     * @desc create new contact
     * @param params
     */
    this.sendContact = function(params) {
        return $resource(API_URL + 'add-contact', params, {post: {method: "POST"}})
    };

    /**
     * @name function getContacts
     * @desc update contact
     * @param params
     * @param id
     */
    this.updateContact = function(params, id) {
        return $resource(API_URL + 'update-contact/' + id, params, {post: {method: "POST"}})
    }
}