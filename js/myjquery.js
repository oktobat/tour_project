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
        if ( winWidth > 800 && flag) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'block',
                right:'0px',
            })
        } else if (winWidth<=800 && !flag ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'none',
                right:'-320px'
            })
        }
    })



    // 메인슬라이드 : 슬릭슬라이더 연결
    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:1000,
    })



})(jQuery)


