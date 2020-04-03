$(function(){

 $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 100000,
 });
 $('.header__menu-btn').on('click touchstart', function () {
   $('.header-navigation__list').slideToggle();
   $('.header__menu-btn').toggleClass('active');
   return false
 });
  
});