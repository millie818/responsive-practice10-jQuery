$(document).ready(function() {
  $(".img_slider").slick({
    arrow: false,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
    // slidesToShow: 3,
    centerMode: true,
    fade: true
  })
  $(".sp_header_nav_btn").on('click',function () {
    $("#sp_header_nav ul").slideToggle()
  })
});