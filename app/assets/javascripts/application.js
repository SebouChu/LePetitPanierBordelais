// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//


/////////////////////////////
///                       ///
///        Carousel       ///
///                       ///
/////////////////////////////


var initCarousel = function() {
  var carousel = new Carousel(document.querySelector("#foo"), {
  autoload : true,
  interval : 3000
});
  var carousel2 = new Carousel(document.querySelector("#foo-2"), {
  autoload : true,
  interval : 3000
});
  var carousel3 = new Carousel(document.querySelector("#foo-3"), {
  autoload : true,
  interval : 3000
});
  var carousel4 = new Carousel(document.querySelector("#foo-4"), {
  autoload : true,
  interval : 3000
});
  var carousel5 = new Carousel(document.querySelector("#foo-5"), {
  autoload : true,
  interval : 3000
});
  var carousel6 = new Carousel(document.querySelector("#foo-6"), {
  autoload : true,
  interval : 3000
});
  var carousel7 = new Carousel(document.querySelector("#foo-7"), {
  autoload : true,
  interval : 3000
});

  carousel.launch(); //Lance le carousel
  carousel2.launch();
  carousel3.launch();
  carousel4.launch();
  carousel5.launch();
  carousel6.launch();
  carousel7.launch();
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




// var active = document.querySelector('a.menu-item.current');
//
// var changeActive = function(){
//   items[i].addEventListener("click", function(){ //DISPLAY POPUP
//     active.className = "menu-item";
//     items[i].className = "menu-item current";
//   }, true);
// }
//
// for(var i=0; i < items.length; i++){
//   changeActive();
// };
