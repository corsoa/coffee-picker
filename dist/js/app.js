'use strict';

require(['angular'], function (angular) {
    require(['controllers/coffeepicker', 'directives/coffeepicker', 'services/coffeepicker'], function (coffeeController, coffeeDirective, coffeeService) {
        angular.module('CoffeePicker', [coffeeDirective, coffeeService]).controller('CoffeeController', coffeeController);
        angular.bootstrap(document, ['CoffeePicker']);
    });
});