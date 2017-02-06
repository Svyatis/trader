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
                    name: $ctrl.create_name,
                    price: $ctrl.create_price,
                    vendor: $ctrl.create_vendor,
                    min_quantity: $ctrl.create_min_quantity,
                    max_quantity: $ctrl.create_max_quantity,
                    description: $ctrl.create_description,
                    type: $ctrl.create_type,
                    discount: $ctrl.discount},
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
            vendor: $ctrl.edit_vendor,
            min_quantity: $ctrl.edit_min_quantity,
            max_quantity: $ctrl.edit_max_quantity,
            description: $ctrl.edit_description,
            type: $ctrl.edit_type,
            discount: $ctrl.discount};

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

    $ctrl.editModal = function(id, name, price, vendor, min_q, max_q, description, type, discount) {
        $ctrl.edit_id = id;
        $ctrl.edit_name = name;
        $ctrl.edit_price = price;
        $ctrl.edit_vendor = vendor;
        $ctrl.edit_min_quantity = min_q;
        $ctrl.edit_max_quantity = max_q;
        $ctrl.edit_description = description;
        $ctrl.edit_discount = discount;
        $ctrl.edit_type = type;
        $ctrl.discount = [];
        for(var i=0;i<discount.length;i++) {
            $ctrl.discount[discount[i].id] = discount[i];
        }
        $ctrl.file = API_URL + 'get_image/' + id;
        console.log($ctrl.discount);
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