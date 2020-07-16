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

    $('.link-icon').hover(
        function(){
            $(this).animate({
                'font-size':'50px'
            },100)

        },
        function(){
            $(this).animate({
                'font-size':'30px'
            },100)
        }
    );

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop':position
        },'slow');
    });

    


  });