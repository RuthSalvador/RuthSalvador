
$(document).ready(function(){

  /** scroll **/
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    var navHeader = document.getElementById("nav--header");
      if (currentScroll >= 150) {
        navHeader.classList.add("background-dark");
        navHeader.classList.remove("background-cap");

      } else {
        navHeader.classList.add("background-cap");
        navHeader.classList.remove("background-dark");
      }
  }, false);

  /** carousel **/
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
  });
});

