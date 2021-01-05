(function) ($){
    // stycky header
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('header').addClass('menu-top-bg');
      }
      else
      {
        $('header').removeClass('menu-top-bg');
      }
      
    });
    
      // active JS 
        $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    var scroll = new SmoothScroll('a[href*="#"]', {
    
        
        // Speed & Duration
        speed:500, 
    });
    //wow
    new WOW().init();
    })(jQuery);