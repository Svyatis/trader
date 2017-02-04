'use strict';

/**
 * Export productsGroceryComponent
 */
module.exports = angular
    .module('mainModule.productsGroceryComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.grocery.caviar', { url: '/caviar', component: 'productsGroceryCaviarComponent' })
            .state('products.grocery.cheese', { url: '/cheese', component: 'productsGroceryCheeseComponent' })
            .state('products.grocery.coffee', { url: '/coffee', component: 'productsGroceryCoffeeComponent' })
            .state('products.grocery.macaroni', { url: '/macaroni', component: 'productsGroceryMacaroniComponent' })
            .state('products.grocery.olive_oil', { url: '/olive_oil', component: 'productsGroceryOliveOilComponent' })
    })
    .component('productsGroceryComponent', {
        templateUrl: '/templates/products_grocery.template.html',
        controller: ProductsGroceryCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsGroceryCtrl
 * @param ngCart
 * @param PagerService
 * @param TraderService
 * @param shareData
 * @memberOf mainModule
 */
function ProductsGroceryCtrl(ngCart, PagerService, TraderService, shareData, $scope) {
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