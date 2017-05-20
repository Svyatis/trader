'use strict';

/**
 * Export homeComponent
 */
module.exports = angular
    .module('mainModule.homeComponent', [])
    .component('homeComponent', {
        templateUrl: '/templates/home.template.html',
        controller: HomeCtrl
    });

    /**
     * @name HomeCtrl
     * @memberOf mainModule
     */
    function HomeCtrl() {
        var $ctrl = this;

        $(document).ready(function(){
            $('.your-class').slick({
                autoplay: true,
                autoplaySpeed: 7000
            });
        });


    }
