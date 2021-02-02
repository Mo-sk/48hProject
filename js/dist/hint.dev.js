"use strict";

if (!localStorage.getItem('nbHint')) {
  localStorage.setItem('nbHint', 0);
}

console.log("Comme césar le disais <<Deus ex Machina>> donc si vous êtes perdu demande l'aide de la machine grâce à la fonction giveHint()");
var hint = ["Qu'il a du style cette indice", "Je n'apprécie pas être révélé au grand jour", "Ne me titillez pas, cela me chatouille", "Beep-B00p B11p-Boop - 83 585 n'est pas dans le bon ordre", "Drôle de suite, la fonction find pourrais vous être utile ", "Il nous faudrais prendr eun peu de recul", "Tous les chemin mène à l'accueil", "Beep-B00p B11p-Boop - la frontiere entre l'homme et la machine est fine", "Beep-B00p B11p-Boop - Les grand  Hommes seront toujours les premiers et les autres des moins que rien", "A l'accueil cesar ce rend compte qu'un de ces gardes n'est plus visible, il l'appela donc \n Fouiller dans le css le garde(div) manquant et rajouter le au dom ", "Un QR Code.. comme c'est original", " il n'y a plus d'indice c'est a vous de recoller les morceau", ""];

function giveHint() {
  if (window.location.href.includes('index')) {
    if (JSON.parse(localStorage.nbHint) >= 0 && JSON.parse(localStorage.nbHint) < 7) {
      console.log("hint: ".concat(hint[localStorage.nbHint]));
    } else if (JSON.parse(localStorage.progess).etape1 == "" && JSON.parse(localStorage.nbHint) > 6 && JSON.parse(localStorage.nbHint) <= 8) {
      console.log("hint: ".concat(hint[localStorage.nbHint]));
    } else {
      console.log("Il n'y a plus d'indice pour cette \xE9tape");
    }
  }

  if (window.location.href.includes('hidden')) {
    if (JSON.parse(localStorage.nbHint) >= 8 && JSON.parse(localStorage.nbHint) < 10) {
      console.log("hint: ".concat(hint[localStorage.nbHint]));
    } else {
      console.log("Il n'y a plus d'indice pour cette \xE9tape");
    }
  }

  if (window.location.href.includes('crypt')) {
    if (JSON.parse(localStorage.nbHint) >= 10 && JSON.parse(localStorage.nbHint) < 12) {
      console.log("hint: ".concat(hint[localStorage.nbHint]));
    } else {
      console.log("Il n'y a plus d'indice pour cette \xE9tape");
    }
  }

  var nbHint = JSON.parse(localStorage.getItem("nbHint"));
  nbHint++;
  localStorage.nbHint = JSON.stringify(nbHint);
}