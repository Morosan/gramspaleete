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
  
  // Copyright current year
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
});