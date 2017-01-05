require('./components/main.component');
require('./components/home.component');
require('./components/about.component');
require('./components/products.component');
require('./components/products_wines.component');
require('./components/products_grocery.component');
require('./components/share.component');
require('./components/vip.component');
require('./components/contacts.component');
require('./components/basket.component');
require('./services/trader.service');

module.exports = angular.module("mainModule", [
    // components
    'mainModule.mainComponent',
    'mainModule.homeComponent',
    'mainModule.aboutComponent',
    'mainModule.productsComponent',
    'mainModule.productsWinesComponent',
    'mainModule.productsGroceryComponent',
    'mainModule.shareComponent',
    'mainModule.vipComponent',
    'mainModule.contactsComponent',
    'mainModule.basketComponent',
    // services
    'mainModule.traderService'
]);