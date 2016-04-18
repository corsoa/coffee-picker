'use strict';

require([
        'angular'
], function(angular) {
    require(['dist/js/controllers/coffeepicker',
             'dist/js/directives/coffeepicker',
             'dist/js/services/coffeepicker'
    ], function(coffeeController, coffeeDirective, coffeeService) {
        angular.module('CoffeePicker', [coffeeDirective, coffeeService])
               .controller('CoffeeController', coffeeController);
        angular.bootstrap(document, ['CoffeePicker']);
    });
});
