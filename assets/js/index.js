let scrollCarousel = new ScrollCarousel(".my-carousel", {speed: 8, smartSpeed: true, autoplay: true});
document.querySelector("#button").addEventListener("click", function () {if (scrollCarousel.isActive) 
{scrollCarousel.destroy();}else{scrollCarousel = scrollCarousel.reinit();}});