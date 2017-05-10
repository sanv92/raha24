$(document).ready(function() {

/*ie fixed*/
/*
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
    {

        var ieversion = new Number(RegExp.$1);
        if (ieversion <= 7)
        {
            var clogin = 140;
        } else {
            var clogin = 135;
        }
    } else {
        var clogin = 135;
    }
*/


    if($.cookie('login') == 'closed') {
        $('form[name=login] fieldset legend').removeClass("clogin");
        $('.login').addClass("logincl");
    }

    $("form[name=login] fieldset legend").click( function(event){
        event.preventDefault();
        if ($(this).hasClass("clogin") ) {
            $(".login").animate({ marginTop : '0px' }, 300);
            $(this).removeClass("clogin");
            $.cookie('login', 'closed', { expires: 30 });
        } else {
            $(".login").animate({ marginTop : '-135px' }, 300);
            $(this).addClass("clogin");
            $.cookie('login', 'open', { expires: 30 });
        }
        return false;
    });

//caruser
     $('.slider ul').append($('.slider ul li').clone().children('li').end());
     $('.slider li:first').before($('.slider li:last'));

     $('#cright').click(function(){
     var item_width = $('.slider li').outerWidth();
     var left_indent = parseInt($('.slider ul').css('left')) - item_width;

     $('.slider ul:not(:animated)').animate({'left' : left_indent},500,function(){
     $('.slider ul li:last').after($('.slider ul li:first'));
     $('.slider ul').css({'left' : '-850px'});
     });
     });

     function doStuff() { $('#cright').trigger('click'); } setInterval(doStuff, 5000);

     $('#cleft').click(function(){
     var item_width = $('.slider ul li').outerWidth();
     var left_indent = parseInt($('.slider ul').css('left')) + item_width;

     $('.slider ul:not(:animated)').animate({'left' : left_indent},500,function(){
     $('.slider ul li:first').before($('.slider ul li:last'));
     $('.slider ul').css({'left' : '-850px'});
     });


     });
//caruser

});