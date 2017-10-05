var burger = function(){
  var header = document.getElementsByClassName('header-burger');
  var headerContent = document.getElementsByClassName('header-burger-content');

  header[0].addEventListener('click',function(e){
    headerContent[0].classList.toggle('display-none');
  });

}
