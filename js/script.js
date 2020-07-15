$(function() {
    $('#main').fadeIn(1000);

    $('.content').hover(
        function(){
            $(this).find('.explain').fadeIn(100);
        }
        ,
        function(){
            $(this).find('.explain').fadeOut(100)
        }
    );


  });