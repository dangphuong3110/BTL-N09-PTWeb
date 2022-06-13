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


let navLink = document.querySelectorAll('.nav-pills .nav-link');
let tabPane = document.querySelectorAll('.tab-pane');


for(let i=0; i<navLink.length; i++){
    navLink[i].addEventListener('click', function(){
        for(let j=0; j<navLink.length; j++){
            navLink[j].classList.remove('active');
            navLink[j].setAttribute('aria-expanded', 'false');
            tabPane[j].classList.remove('active');
        }
        navLink[i].classList.add('active');
        navLink[i].setAttribute('aria-expanded', 'true');
        tabPane[i].classList.add('active');
    });
};