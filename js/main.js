$(function () {
  $(window).scroll(function() {
      $('.trigger1').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUpBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.trigger2').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUpBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.trigger3').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUpBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.wrapper5').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUp");
          }
      });
  });
  $(window).scroll(function() {
      $('.wrapper6').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUp");
          }
      });
  });
  $(window).scroll(function() {
      $('.customer-form').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
  /*вставить*/
})


