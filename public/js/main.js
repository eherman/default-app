(function () {

    'use strict';

    require.config({
        paths: {
            'jquery': '../../lib/jquery-3.2.1/jquery.min',
            'bootstrap': '../../lib/bootstrap-3.3.7/js/bootstrap.min'
        },
        shim: {
            'bootstrap': {
                deps: ['jquery']
            }
        }
    });

    require([
        'app',
        'jquery',
        'bootstrap'
    ],
    function(App, $) {
        App.initialize();
    });

}());
