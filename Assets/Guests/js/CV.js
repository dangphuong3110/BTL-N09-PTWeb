$(document).ready(function () {
    $(window).bind('scroll', function () {
        var gap = 400;
        if ($(window).scrollTop() > gap) {
            $('.navbar').removeClass('navbar-transparent');
        }
        else {
            $('.navbar').addClass('navbar-transparent');
        }
    });

    // REFERENCE SLIDER
    $('#reference-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    }); 
});


let navLink = document.querySelectorAll('.nav-pills .nav-link');
let tabPane = document.querySelectorAll('.tab-pane');


for(let i=0; i<navLink.length; i++){
    navLink[i].addEventListener('click', function(){
        for(let j=0; j<navLink.length; j++){
            navLink[j].classList.remove('active');
            tabPane[j].classList.remove('active');
        }
        navLink[i].classList.add('active');
        tabPane[i].classList.add('active');
    });
};

let formControl = document.querySelectorAll('.form-control');
let inputGroup = document.querySelectorAll('.input-group');

for(let i=0; i<formControl.length; i++){
    formControl[i].addEventListener('click', function(){
        for(let j=0; j<inputGroup.length; j++)
            inputGroup[j].classList.remove('input-group-focus');
        inputGroup[i].classList.add('input-group-focus');
    })
}