//js
//wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
wow.init();

//aos
AOS.init({
    offset: 100,
    delay: 50,
    duration: 500,
    easing: 'linear',
});



//jq
$('document').ready(function(){

   //vcollapse
     $('.example').vCollapse({
      'any': true,
       'onLoad': 0,
       'speed': 300,
       'easing': 'ease-in-out',
      'autoScroll': true,
   });

// counterup start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var mixer = mixitup('#mixit', { 
    animation: {
        duration: 300
    }
});
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
});

  // preloader start
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });
  // preloader end

// slick
   $('.wrapper').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,

     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]

   });
   
   var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };
// curvedtext
    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });


});