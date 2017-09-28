var articles = function(){
  var array = document.getElementsByClassName("article-container");
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);

    array[i].children[1].addEventListener("click",function(e){
      var elt = e.currentTarget.parentNode.children[2];
      if (elt.style.display == "block") {
        e.currentTarget.innerHTML = "Afficher l'article"
        elt.style.display = "none";
      } else {
        e.currentTarget.innerHTML = "Cacher l'article"
        elt.style.display = "block";
      }
    });
  };
};
