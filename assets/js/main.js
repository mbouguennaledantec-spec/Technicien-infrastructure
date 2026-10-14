// Animation : les barres de competences se remplissent
// et les salaires augmentent jusqu'a leur valeur

function animerBarre(barre) {
  var cible = Number(barre.getAttribute("data-valeur"));
  var largeur = 0;
  barre.style.width = "0%";
  var minuteur = setInterval(function () {
    if (largeur >= cible) {
      clearInterval(minuteur);
    } else {
      largeur = largeur + 1;
      barre.style.width = largeur + "%";
      barre.setAttribute("aria-valuenow", largeur);
    }
  }, 20);
}

function animerMontant(montant) {
  var cible = Number(montant.getAttribute("data-valeur"));
  var valeur = 0;
  var minuteur = setInterval(function () {
    if (valeur >= cible) {
      clearInterval(minuteur);
    } else {
      valeur = valeur + 500;
      montant.textContent = valeur.toLocaleString("fr-FR") + " €";
    }
  }, 20);
}

function lancerAnimation() {
  var barres = document.querySelectorAll(".progress-bar");
  for (var i = 0; i < barres.length; i++) {
    animerBarre(barres[i]);
  }
  var montants = document.querySelectorAll(".montant");
  for (var j = 0; j < montants.length; j++) {
    animerMontant(montants[j]);
  }
}

// Lancement au chargement de la page
lancerAnimation();
