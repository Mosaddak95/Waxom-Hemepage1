$(function(){
//banner slider
$('.banner-contain-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    arrows:false,
})
//service slider
$('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    arrows:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
          }
        },
      ]
})
//project
$('.venobox').venobox();

//mixitup
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);

//counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Blog slider
$('.blog-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:true,
    centerMode:true,
    centerPadding:false,
    prevArrow:'.left',
    nextArrow:'.right',
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            
          }
        },
      ]
});

// brand slider
$('.brand-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            
          }
        },
      ]
  
});


});