define([
    'jquery'
], function ($) {

    'use strict';

    return {
        initialize: function() {
            var notJumping = true;
            var notShooting = true;
            var bulletCount = 0;

            $('#person').css('top', $('#person').position().top);

            $("body").keydown(function(event){ 
                if(event.which === 87) {
                    // $('#person').css('top', $('#person').position().top - 10);
                } else if(event.which === 65) {
                    $('#person').css('left', $('#person').position().left - 20);
                } else if(event.which === 83) {
                    // $('#person').css('top', $('#person').position().top + 10);
                } else if(event.which === 68) {
                    $('#person').css('left', $('#person').position().left + 20);
                } else if(event.which === 74) {
                    if(notJumping) {
                        notJumping = false;
                        $( "#person" ).animate({
                            top: $('#person').position().top - 200
                        }, 500, 'swing', function() {
                            $( "#person" ).animate({
                                top: $('#person').position().top + 200
                            }, 400, 'swing', function() {
                                // Animation complete.
                                notJumping = true;
                            });
                        });
                    }
                } else if(event.which === 75) {
                    var id = 'bullet' + bulletCount;
                    $("body").append('<div id="' + id + '" class="bullet"></div>');
                    bulletCount++;
                    if(notShooting) {
                        // notShooting = false;
                        $('#' + id).css('display', 'inline-block');
                        $('#' + id).css('top', $('#person').position().top + 50);
                        $('#' + id).css('left', $('#person').position().left + 180);
                        $('#' + id).animate({
                            left: $('#' + id).position().left + 1500
                        }, 500, 'linear', function() {
                            // Animation complete.
                            $('#' + id).css('display', 'none');
                            notShooting = true;
                        });
                    }
                }
            });

        }
    };
});