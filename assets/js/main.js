// Animation : l'image grandit au chargement de la page
var image = document.querySelector(".imgmetier");
var taille = 0;

var minuteur = setInterval(function () {
  taille = taille + 5;
  image.style.width = taille + "px";
  if (taille >= 200) {
    clearInterval(minuteur);
  }
}, 20);
