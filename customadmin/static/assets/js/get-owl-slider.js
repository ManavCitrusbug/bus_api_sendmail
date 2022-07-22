$(document).ready(function () {
  $("#testimonials-owl").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    autoplay: true,
    stagePadding: 0,
    margin: 15,
    autoplaySpeed: 3000,
    smartSpeed:2000,
    responsive:{
      0:{
        items:1 
      },
      600:{
        items:2
      },
      1180:{
        items:3
      },
      1280:{
        items:3
      }
    }
  });
});