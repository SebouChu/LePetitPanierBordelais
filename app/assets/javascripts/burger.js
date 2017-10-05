document.addEventListener('DOMContentLoaded',function(){

  var header = document.getElementsByClassName('header-burger');
  var headerContent = document.getElementsByClassName('header-burger-content');

  if(window.innerWidth < 720){
    header[0].classList.toggle("display-none");
  }

  header[0].addEventListener('click',function(e){
    headerContent[0].classList.toggle('display-none');
  });

});
