(function () {

    'use strict';

    require.config({
        paths: {
            // 'jquery': '../lib/vendor/jquery-1.11.2.min',
            // 'bootstrap': '../lib/vendor/bootstrap-3.3.6-dist/js/bootstrap.min'
        },
        shim: {
            // 'bootstrap': {
            //     deps: ['jquery']
            // }
        }
    });

    require([
        'app'
        // 'app',
        // 'jquery',
        // 'bootstrap'
        ],
        function(App, $) {
            App.initialize();
    });

}());
