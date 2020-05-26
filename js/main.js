$(document).ready(function(){
  // Slick Slider
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 80
    }, 500);
  });

  // ADA Tab
  $(document).on('keydown', function (e) {
      if(e.keyCode == 9) {
          $('body').addClass('show-focus-outlines');
      }
  });

  $(document).on('click', function (e) {
      $('body').removeClass('show-focus-outlines');
  });

  // Copyright current year
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
});