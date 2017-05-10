$(document).ready(function() {

    $('section[role=main] ul li')
        .mouseenter(function() {
            $( this).find('div').addClass('shadow');

        })
        .mouseleave(function() {
            $( this ).find('div').removeClass('shadow');
        });

});