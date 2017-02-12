'use strict';

/**
 * Export productsWinesComponent
 */
module.exports = angular
    .module('mainModule.productsWinesComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('products.wines.sparkling', { url: '/sparkling', component: 'productsWinesSparklingComponent' })
            .state('products.wines.dry', { url: '/dry', component: 'productsWinesDryComponent' })
            .state('products.wines.semisweet', { url: '/semisweet', component: 'productsWinesSemisweetComponent' })
    })
    .component('productsWinesComponent', {
        templateUrl: '/templates/products_wines.template.html',
        controller: ProductsWinesCtrl,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ProductsWinesCtrl
 * @param ngCart
 * @param shareData
 * @param PagerService
 * @param TraderService
 * @param $scope
 * @memberOf mainModule
 */
function ProductsWinesCtrl(ngCart, PagerService, TraderService, shareData, $scope) {
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
        $ctrl.data = {'start': $scope.val2.start, 'end':$scope.val2.end, 'name': $ctrl.search.name};
        TraderService.searchData($ctrl.data).post().$promise.then(function(response) {
            $ctrl.pager = PagerService.GetPager(response.wineSearch.length, page);
            $ctrl.items = response.wineSearch.slice($ctrl.pager.startIndex, $ctrl.pager.endIndex + 1);
        });
    };

    function setPage(page) {
        if (page < 1 || page > $ctrl.pager.totalPages) {
            return;
        }
        $ctrl.pager = PagerService.GetPager($ctrl.dummyItems.length, page);
        $ctrl.items = $ctrl.dummyItems.slice($ctrl.pager.startIndex, $ctrl.pager.endIndex + 1);
    }

    $scope.val2 = {};
    $scope.option2 = {
        start: $ctrl.minPrice,  //start point of the slider bar
        end: $ctrl.maxPrice,  //end point of the slider bar
        handles: [$ctrl.minPrice, $ctrl.maxPrice],  //init point of two handles
        outFormatter: function(value, decimals) {
            if (value.point) {
                return value.point;
            } else {
                return (value.end - value.start).toFixed(decimals);
            }
        }
    };
}