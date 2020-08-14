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
        $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    function init(){
        var winWidth = $(window).innerWidth()
        if ( winWidth > 800 && !$('html').hasClass('pc')) {
            $('#header').removeClass('on')
            $('.outlayer').removeClass('on')
            $('.nav').css({
                display:'block',
                right:'0px'
            })
            $('html').addClass('pc').removeClass('mobile')
        } else if ( winWidth<800 && !$('html').hasClass('mobile') ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'none',
                right:'-320px'
            })
            $('html').addClass('mobile').removeClass('pc')
        }
    }        
    init()

    $(window).resize(function(){
        init()
    })
    



    // 메인슬라이드 : 슬릭슬라이더 연결
    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:1000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:false,
        cssEase:'ease',
        draggable:true,
        fade:false, 
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>'
    })



})(jQuery)


