$(document).ready(function() {



    //header menu active
    $('.tabs li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.tabs li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.layout p').click(function () {
        $('.form-layout').slideToggle('slow');
        $('.layout p').toggleClass('active');
    });

    $('.action p').click(function () {
        $('.form-action').slideToggle('slow');
        $('.action p').toggleClass('active');
    });

    $('.animation p').click(function () {
        $('.form-animation').slideToggle('slow');
        $('.animation p').toggleClass('active');
    });


});

