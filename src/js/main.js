'use strict';

require.config({
    paths: {
        angular: '../../bower_components/angular/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    },
    deps: ['dist/js/app']
});
