require('./components/main.component');
require('./components/home.component');
require('./components/about.component');
require('./components/products.component');
require('./components/products_wines.component');
require('./components/products_wines_dry.component');
require('./components/products_wines_sparkling.component');
require('./components/products_wines_sweet.component');
require('./components/products_grocery.component');
require('./components/products_grocery_caviar.component');
require('./components/products_grocery_cheese.component');
require('./components/products_grocery_coffee.component');
require('./components/products_grocery_macaroni.component');
require('./components/products_grocery_olive_oil.component');
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
    'mainModule.productsWinesDryComponent',
    'mainModule.productsWinesSparklingComponent',
    'mainModule.productsWinesSweetComponent',
    'mainModule.productsGroceryComponent',
    'mainModule.productsGroceryCaviarComponent',
    'mainModule.productsGroceryCheeseComponent',
    'mainModule.productsGroceryCoffeeComponent',
    'mainModule.productsGroceryMacaroniComponent',
    'mainModule.productsGroceryOliveOilComponent',
    'mainModule.shareComponent',
    'mainModule.vipComponent',
    'mainModule.contactsComponent',
    'mainModule.basketComponent',
    // services
    'mainModule.traderService'
]);