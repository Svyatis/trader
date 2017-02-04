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
 * @memberOf mainModule
 */
function ProductsWinesCtrl(ngCart, shareData, PagerService) {
    var $ctrl = this;
    $ctrl.data = shareData.getList();
    $ctrl.dummyItems = $ctrl.data[0].wines;
    $ctrl.pager = {};
    $ctrl.setPage = setPage;

    function initController() {
        // initialize to page 1
        $ctrl.setPage(1);
    }
    initController();
    function setPage(page) {
        if (page < 1 || page > $ctrl.pager.totalPages) {
            return;
        }
        $ctrl.pager = PagerService.GetPager($ctrl.dummyItems.length, page);
        $ctrl.items = $ctrl.dummyItems.slice($ctrl.pager.startIndex, $ctrl.pager.endIndex + 1);
    }
}