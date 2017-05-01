'use strict';

/**
 * Export shareComponent
 */
module.exports = angular
    .module('mainModule.shareComponent', [])
    .component('shareComponent', {
        templateUrl: '/templates/share.template.html',
        controller: ShareCtrl,
        transclude: true,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name ShareCtrl
 * @memberOf mainModule
 */
function ShareCtrl(ngCart, PagerService, TraderService, shareData, $scope) {
    var $ctrl = this;
    $ctrl.data = shareData.getList();
    $ctrl.dummyItems = $ctrl.data[0];
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