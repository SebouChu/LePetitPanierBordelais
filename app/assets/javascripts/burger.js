var burger = function(){
  var header = document.getElementsByClassName('header-burger');
  var headerContent = document.getElementsByClassName('header-burger-content');

  header[0].addEventListener('click',function(e){
    e.currentTarget.classList.toggle('color-red');
    headerContent[0].classList.toggle('display-none');
  });

}
