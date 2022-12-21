$(document).ready(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 1){
            $('.navbar').addClass('sticky-nav-on');
        }else {
            $('.navbar').removeClass('sticky-nav-on');
        }
    })
    $('.nav-link').click(function(){
        $("#navbarSupportedContent").removeClass('show');
    })


    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
})

});