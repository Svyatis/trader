'use strict';

/**
 * Export traderService
 */
module.exports = angular
    .module('mainModule.traderService', ['ngResource'])
    .service('TraderService', TraderService)
    .service('PagerService', PagerService)
    .factory('shareData', shareData);

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
     * @name function getContacts
     * @desc get one contact by id
     * @param id
     */
    this.getDetailedProduct = function(id) {
        return $resource(API_URL + 'get_product/' + id);
    };

    this.searchData = function(params) {
        return $resource(API_URL + 'search/', params, {post: {method: "POST"}})
    };

    /**
     * @name function getPhoto
     * @desc get getPhoto by id
     * @param id
     */
    this.getImage = function(id) {
        return $resource(API_URL + 'get_image/' + id);
    };

    /**
     * @name function getContacts
     * @desc create new contact
     * @param params
     */
    this.saveProduct = function(params) {
        return $resource(API_URL + 'save_product/', params, {post: {method: "POST"}})
    };

    /**
     * @name function getContacts
     * @desc update contact
     * @param params
     * @param id
     */
    this.updateProduct = function(params, id) {
        return $resource(API_URL + 'update_product/' + id, params, {update: {method: "POST"}})
    };

    /**
     * @name function deleteProduct
     * @desc update contact
     * @param id
     */
    this.deleteProduct = function(id) {
        return $resource(API_URL + 'delete_product/' + id)
    }
}

function PagerService() {
    // service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 12;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}

function shareData() {
    var list = [];

    return {
        addItem: addItem,
        getList: getList
    };

    function addItem(item) {
        list.push(item);
    }

    function getList() {
        return list;
    }
}

function startFrom() {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
}