(function($){

    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on') ) {
            $('.nav').css({
                display:'block'
            }).animate({
                right:'0px'
            }, 500)
        } else {
            $('.nav').animate({
                right:'-320px'
            }, 500, function(){
                $(this).css({
                    display:'none'
                })
            })
        }
        // $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    $(window).resize(function(){
        var winWidth = $(this).innerWidth()
        if ( winWidth > 800 ) {
            $('#header').removeClass('on')
            $('.outlayer').removeClass('on')
        }
    })





})(jQuery)


