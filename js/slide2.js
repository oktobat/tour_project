(function($){


    $('.slide-inner2').slick({

        autoplay:true,
        centerMode:true, // centerMode는 slidesToScroll 값이 1값이며, 
                         // 좌우측끝에 슬라이드 조각이 보여지는 형태임
        centerPadding:'100px', // 좌우측 끝에 보여질 슬라이드 조각 넓이값(기본값은 50px)
        slidesToShow:3,
        slidesToScroll:1,
        dots:false,
        autoplaySpeed:3000,
        speed:600,
        arrows:true,
        prevArrow:'<button class="prev arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="next arrow"><i class="fas fa-angle-right"></i></button>',
    })



})(jQuery)