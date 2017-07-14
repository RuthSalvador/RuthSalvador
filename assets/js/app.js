
$(document).ready(function(){

  /** scroll **/
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    var navHeader = document.getElementById("nav--header");
      if (currentScroll >= 150) {
        navHeader.classList.add("bg-dark");

      } else {
        navHeader.classList.remove("bg-dark");
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

