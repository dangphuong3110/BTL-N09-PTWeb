$(document).ready(function () {
    $(window).bind('scroll', function () {
        var gap = 400;
        if ($(window).scrollTop() > gap) {
            $('nav').removeClass('navbar-transparent');
        }
        else {
            $('nav').addClass('navbar-transparent');
        }
    })
})
