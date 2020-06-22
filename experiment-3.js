$(document).ready(function (){
    $('#project-nav').click(function() {
        $('html, body').animate({
            scrollTop : $('#marker-1').offset().top - 130
        }, 1000);
    })
})

$(document).ready(function (){
    $('#about-nav').click(function() {
        $('html, body').animate({
            scrollTop : $('#marker-2').offset().top - 130
        }, 1000);
    })
})

$(document).ready(function (){
    $('#button-navigate').click(function() {
        $('html, body').animate({
            scrollTop : $('#marker-1').offset().top - 130
        }, 1000);
    })
})

$('.carousel').carousel();