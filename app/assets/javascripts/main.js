/////////////////////////////
///                       ///
///        Carousel       ///
///                       ///
/////////////////////////////

var initCarousel = function() {
  var carouselIds = ["#carousel-restos", "#carousel-marches", "#carousel-api", "#carousel-ele", "#carousel-hor", "#carousel-mar", "#carousel-vit"];
  for(var i = 0 ; i < carouselIds.length ; i++) {
    var carouselDiv = document.querySelector(carouselIds[i]);
    if(carouselDiv) {
      var carousel = new Carousel((carouselDiv), {
        autoload: true,
        interval: 3000,
        displayArrowSelectors: false,
        displayButtonSelectors: false
      });
      carousel.launch();
    }
  }
}


var menuLoaded = function(){
  var section = window.location.href.match(/[^\/]\/([a-z]+)\/?/);
  var array = document.querySelectorAll(".menu-item");

  if (section) {
    switch (section[1]) {
      case 'services':
          array[1].className = 'menu-item current';
        break;
      case 'producteurs':
          array[2].className = 'menu-item current';
        break;
      case 'about':
          array[3].className = 'menu-item current';
        break;
      case 'contact':
          array[4].className = 'menu-item current';
        break;
    }
  } else {
    array[0].className = 'menu-item current';
  }
};
