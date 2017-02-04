'use strict';
var angular = require('angular');
/**
 * Export productsComponent
 */
module.exports = angular
    .module('mainModule.productsComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.wines', { url: '/wines', component: 'productsWinesComponent' })
            .state('products.grocery', { url: '/grocery', component: 'productsGroceryComponent' })
            .state('products.detailed', { url: '/:id', component: 'detailedComponent'})
    })
    .component('productsComponent', {
        templateUrl: '/templates/products.template.html',
        controller: ProductsCtrl,
        transclude: true,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsCtrl
 * @param ngCart
 * @param PagerService
 * @param shareData
 * @memberOf mainModule
 */
function ProductsCtrl(ngCart, PagerService, TraderService, shareData, $scope) {
    var $ctrl = this;
    $ctrl.data = shareData.getList();
    $ctrl.dummyItems = $ctrl.data[2];
    $ctrl.minPrice = Math.min.apply(Math,$ctrl.dummyItems.map(function(o){return o.price;}));
    $ctrl.maxPrice = Math.max.apply(Math,$ctrl.dummyItems.map(function(o){return o.price;}));
    $ctrl.search = {};
    $ctrl.pager = {};
    $ctrl.setPage = setPage;
    function initController() {
        // initialize to page 1
        $ctrl.setPage(1);
    }
    initController();

    $ctrl.filterPage = function(page) {
        $ctrl.data = {'start': $scope.val.start, 'end':$scope.val.end, 'name': $ctrl.search.name};
        TraderService.searchData($ctrl.data).post().$promise.then(function(response) {
            $ctrl.pager = PagerService.GetPager(response.res.length, page);
            $ctrl.items = response.res.slice($ctrl.pager.startIndex, $ctrl.pager.endIndex + 1);
        });
    };

    function setPage(page) {
        if (page < 1 || page > $ctrl.pager.totalPages) {
            return;
        }
        $ctrl.pager = PagerService.GetPager($ctrl.dummyItems.length, page);
        $ctrl.items = $ctrl.dummyItems.slice($ctrl.pager.startIndex, $ctrl.pager.endIndex + 1);
    }

    $scope.val = {};
    $scope.option = {
        start: $ctrl.minPrice,  //start point of the slider bar
        end: $ctrl.maxPrice,  //end point of the slider bar
        handles: [40, 900],  //init point of two handles
        outFormatter: function(value, decimals) {
            if (value.point) {
                return value.point;
            } else {
                return (value.end - value.start).toFixed(decimals);
            }
        }
    };
}