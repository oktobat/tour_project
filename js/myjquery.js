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
        if ( winWidth>800 && !$('html').hasClass('pc') ) {
            $('#header').removeClass('on')
            $('.outlayer').removeClass('on')
            $('.nav').css({
                display:'block',
                right:'0px'
            })
            $('html').addClass('pc').removeClass('mobile')
        } else if (winWidth<800 && !$('html').hasClass('mobile')) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'none',
                right:'-320px'
            })
            $('html').addClass('mobile').removeClass('pc')
        }
    }        
    
    init()
    // 이벤트 발생과 상관없이 최초 한번 현재 화면의 넓이를 구해서
    // 800보다 크면 html에 클래스 pc를 붙여주고
    // 800보다 작으면 html에 클래스 mobile을 붙여주는 
    // 함수 init()을 작성한다.


    $(window).resize(function(){
        init()
    })
    // 리사이즈 이벤트가 발생할때마다 init() 함수를 호출해서
    // 800보다 큰 화면에서 작은 화면으로,
    // 800보다 작은화면에서 큰 화면으로 바뀔때마다
    // 최초 한번만 화면 사이즈에 따른 클래스를 html에 붙여준다.


    // 메인슬라이드 : 슬릭슬라이더 연결
    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:4500,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:false,
        pauseOnFocus:false,
        cssEase:'ease',
        draggable:true,  
        fade:false, 
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
            breakpoint:801,
            settings:{
                arrows:false,
                fade:true,
            }
        }]

    })

    // $(".plpa").on("click", function(){
    //     if ($(this).find('i').hasClass('fa-pause') ){
    //         $(this).find('i').removeClass('fa-pause')
    //         .addClass('fa-play')
    //         $(".slide-inner").slick("slickPause")
    //     } else {
    //         $(this).find('i').removeClass('fa-play')
    //         .addClass('fa-pause')
    //         $(".slide-inner").slick("slickPlay")
    //     }
    // })

    
    // toggle() 메서드를 사용하려면
    // jquery-migrate-1.4.1.min.js 파일을 
    // 핵심파일 아래쪽에 연결시켜야 함
    $(".plpa").toggle(
        function(){
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $(".slide-inner").slick("slickPause")
        },
        function(){
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $(".slide-inner").slick("slickPlay")
        } 
    )


    // 포트폴리오 갤러리 클릭 이벤트시 팝업박스 작동
    var href, src, alt, lieq;
    $('.gallery > li > a').on('click', function(e){
          e.preventDefault(); // 기본이벤트를 막아줌
          lieq = $(this).parent().index()
          $('.galleryPopup').addClass('on')
          href = $(this).attr('href')
          src = $(this).find('img').attr('src')
          alt = $(this).find('img').attr('alt')
          // console.log(alt)
          $('.popupList > div > a').attr('href', href)
          $('.popupList > div > a > img').attr({
              'src':src,
              'alt':alt
          })
    })    


    $('.galleryPopup .close, .galleryPopup').on('click', function(){
        $('.galleryPopup').removeClass('on')
    })

    $('.popupList').on('click', function(e){
        e.stopPropagation();  // 부모한테 이벤트전파를 막음
    })


    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'src':src,
            'alt':alt
        }).css({
            opacity:'0.5'
        }).stop().animate({
            opacity:'1'
        }, 500)
    }


    $('.popupList .prev').on('click', function(){
        --lieq;
        if (lieq<0) {
            lieq = 7;
        }
        changeList(lieq)
    })

    $('.popupList .next').on('click', function(){
        ++lieq;
        if (lieq>7) {
            lieq = 0;
        }
        changeList(lieq)
    })


})(jQuery)


