//tableau d'indice
/*Créer un tableau 'let hint' qui ressort des hint à la demande
en fonction de leur position dans le site. index = position

Plus gros travail = inventif pour les indices */

/* 
https://www.figma.com/file/2X73YLkGRLAqjiEBlQLcb4/Untitled?node-id=1%3A11 Arborescence

page 1 {
    étape 1 - Display: none                                                     | index 0 -> Je n'apprécie pas être révélé au grand jour
    étape 2a - (Biographie) Cliquer sur: JE - SUIS - JULES CESAR                | index 1 -> Ne me titillez pas, cela me chatouille
    étape 3 - 00000001 01000110 10000001 -> 1+128+512+1024+16384+65536 = 85 585 | index 2 -> Beep-B00p B11p-Boop - 83 585 n'est pas dans le bon ordre
     Le binaire qui correspond à 1 = masjucule et 0 = minuscule
}

page 2 {
    étape 4 - Rajouter la div avec le bon css                            | PAS D'INDICE
    étape 4a - ça a affiché le texte malvoyant caché                     | PAS D'INDICE
    étape 4b - Texte malvoyant pas encore trouvé                         | PAS D'INDICE
    étape 4c - Texte malvoyant trouvé -> donner indice sur la clef César | index 3 ->  donne des info sur la valeur de la clef 
}

page 3 {
    étape 5 - Texte de la même couleur que le fond      | PAS D'INDICE
    étape 5a - Jouer avec le parallaxe                  | index 4 -> J'ai la nausée à cause de vous ! GARDES !
    étape 5b - Codes style jeu vidéo dans l'ordre de #  | PAS D'INDICE
    étape 5c - Le QR Code donne directement             | index 5 -> Un QR Code.. comme c'est original
}
*/
if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}

console.log("Comme césar le disais <<Deus ex Machina>> donc si vous êtes perdu demande l'aide de la machine grâce à la fonction giveHint()")
let hint = [
    "Qu'il a du style cette indice",
    "Je n'apprécie pas être révélé au grand jour",
    "Ne me titillez pas, cela me chatouille",
    "Beep-B00p B11p-Boop - 83 585 n'est pas dans le bon ordre",
    "Drôle de suite, la fonction find pourrais vous être utile ",
    "Il nous faudrais prendr eun peu de recul",
    "Tous les chemin mène à l'accueil",
    "Beep-B00p B11p-Boop - la frontiere entre l'homme et la machine est fine",
    "Beep-B00p B11p-Boop - Les grand  Hommes seront toujours les premiers et les autres des moins que rien",
    "J'ai la nausée à cause de vous ! GARDES !",
    "Un QR Code.. comme c'est original",
    " il n'y a plus d'indice c'est a vous de recoller les morceau",
    ""
]

function giveHint() {

    if (window.location.href.includes('index')) {
        if (JSON.parse(localStorage.nbHint) >= 0 && JSON.parse(localStorage.nbHint) < 8) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }
    if (window.location.href.includes('hidden')) {
        if (JSON.parse(localStorage.nbHint) >= 8 && JSON.parse(localStorage.nbHint) < 10) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }


    }
    if (window.location.href.includes('crypt')) {
        if (JSON.parse(localStorage.nbHint) >= 10 && JSON.parse(localStorage.nbHint) < 12) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }
    let nbHint = JSON.parse(localStorage.getItem("nbHint"));

    nbHint++;
    localStorage.nbHint = JSON.stringify(nbHint);
}
