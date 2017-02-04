'use strict';

/**
 * Export adminComponent
 */
module.exports = angular
    .module('mainModule.adminComponent', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('admin.wines', { url: '/wines', component: 'adminWineComponent' })
            .state('admin.grocery', { url: '/grocery', component: 'adminGroceryComponent' })
    })
    .component('adminComponent', {
        templateUrl: '/templates/admin.template.html',
        controller: AdminCtrl,
        transclude: true,
        require: {
            main: '^appMain'
        }
    });

/**
 * @name AdminCtrl
 * @param TraderService
 * @param $state
 * @param API_URL
 * @param Upload
 * @param shareData
 * @param $scope
 * @memberOf adminComponent
 */
function AdminCtrl(TraderService, $state, API_URL, Upload, shareData, $scope) {
    var $ctrl = this;
    $ctrl.data = shareData.getList();
    console.log($ctrl.data);
    $ctrl.types = $ctrl.data[1];

    $ctrl.save = function( file ) {
        file.upload = Upload.upload( {
            url: API_URL + 'save_product/',
            method: 'POST',
            sendFieldsAs: 'form',
            headers: {
                'my-header': 'my-header-value'
            },
            data: {file: file,
                    name: $ctrl.select_name,
                    price: $ctrl.select_price,
                    min_quantity: $ctrl.select_min_quantity,
                    max_quantity: $ctrl.select_max_quantity,
                    type: $ctrl.select_type},
            fileFormDataName: 'file'
        });

        file.upload.then( function ( response ) {
            $ctrl.cancelModal();
            $ctrl.main.getAll();
        }, function ( response ) {
            if ( response.status > 0 )
                logger.error( response )
        } );
    };

    $ctrl.update = function(file) {
        var data = {file: file,
            name: $ctrl.edit_name,
            price: $ctrl.edit_price,
            min_quantity: $ctrl.edit_min_quantity,
            max_quantity: $ctrl.edit_max_quantity,
            type: $ctrl.edit_type};

        if(file != {}) {
            file={};
            file.upload = Upload.upload( {
                url: API_URL + 'update_product/' + $ctrl.edit_id,
                method: 'POST',
                data: data
            });
        } else {
            file.upload = Upload.upload( {
                url: API_URL + 'update_product/' + $ctrl.edit_id,
                method: 'POST',
                sendFieldsAs: 'form',
                headers: {
                    'my-header': 'my-header-value'
                },
                data: data,
                fileFormDataName: 'file'
            });
        }

        file.upload.then( function ( response ) {
            $ctrl.main.getAll();
        }, function ( response ) {
            if ( response.status > 0 )
                logger.error( response )
        } );

    };

    $ctrl.editModal = function(id, name, price, min_q, max_q, type) {
        $ctrl.edit_id = id;
        $ctrl.edit_name = name;
        $ctrl.edit_price = price;
        $ctrl.edit_min_quantity = min_q;
        $ctrl.edit_max_quantity = max_q;
        $ctrl.edit_type = type;
        $ctrl.file = API_URL + 'get_image/' + id;
    };

    if(!(sessionStorage.LoggedIn == 'Yes')) {
        $state.go("login");
    }

    $ctrl.cancelModal = function() {
        $ctrl.file = null;
        $('#imgSaveForm').val('');
        $('#file').val('');
        $('#select_name').val('');
        $('#select_price').val('');
        $('#select_min_quantity').val('');
        $('#select_max_quantity').val('');
        $('#select_type').val('');
    };

    $ctrl.delete = function(id) {
        if(confirm('Ви дійсно хочете видалити цей продукт ?')) {
            TraderService.deleteProduct(id).get().$promise.then(function(response){
                $ctrl.main.getAll();
            });
        } else {
            console.log('Not confirmed');
        }
    }
}