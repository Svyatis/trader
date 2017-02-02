'use strict';

/**
 * Export traderService
 */
module.exports = angular
    .module('mainModule.traderService', ['ngResource'])
    .service('TraderService', TraderService)
    .directive('validFile', validFile);

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

function validFile(){
    return {
        require:'ngModel',
        link:function(scope,el,attrs,ngModel){
            //change event is fired when file is selected
            el.bind('change',function(){
                scope.$apply(function(){
                    ngModel.$setViewValue(el.val());
                    ngModel.$render();
                })
            })
        }
    }
}