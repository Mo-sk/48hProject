//tableau d'indice
/*Créer un tableau 'let hint' qui ressort des hint à la demande
en fonction de leur position dans le site. index = position

Plus gros travail = inventif pour les indices */

/* 
https://www.figma.com/file/2X73YLkGRLAqjiEBlQLcb4/Untitled?node-id=1%3A11 Arborescence

page 1 {
    étape 1 - Display: none                                                     | index 0 -> Je n'apprécie pas être révélé au grand jour;
    étape 2a - (Biographie) Cliquer sur: JE - SUIS - JULES CESAR                | index 1 -> Ne me titillez pas, cela me chatouille;
    étape 3 - 00000001 01000110 10000001 -> 1+128+512+1024+16384+65536 = 85 585 | index 2 -> 83 585 n'est pas dans le bon ordre;
    étape 3a - binaire qui correspond à 1 = masjucule et 0 = minuscule          | index 3 -> Beep-B00p B11p-Boop;
}

page 2 {
    étape 4 - Rajouter la div avec le bon css  | PAS D'INDICE
    étape 4a - ça a affiché le texte malvoyant caché | PAS D'INDICE
    étape 4b - Texte malvoyant pas encore trouvé    | PAS D'INDICE
    étape 4c - Texte malvoyant trouvé -> donner indice sur la clef César | index 4 -> inférieur à 22

}

page 3 {
    étape 5 - Texte de la même couleur que le fond      | PAS D'INDICE
    étape 5a - Jouer avec le parallaxe                  | index 5 -> J'ai la nausée à cause de vous ! GARDES !
    étape 5b - Codes style jeu vidéo dans l'ordre de #  | PAS D'INDICE
    étape 5c - Le QR Code donne directement             | index 6 -> Un QR Code.. comme c'est original
}
*/
if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}

if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}


let hint = ["Je n'apprécie pas être révélé au grand jour", "Ne me titillez pas, cela me chatouille", "83 585 n'est pas dans le bon ordre", "BEEP-b00p B11P-boop", "J'ai la nausée à cause de vous ! GARDES !", "Un QR Code.. comme c'est original"]

function giveHint() {

    if (window.location.href.includes('index')) {
        if (JSON.parse(localStorage.nbHint) >= 0 || JSON.parse(localStorage.nbHint) < 3) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }
    if (window.location.href.includes('hidden')) {
        if (JSON.parse(localStorage.nbHint) >= 3 || JSON.parse(localStorage.nbHint) < 5) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }


    }
    if (window.location.href.includes('hidden')) {
        if (JSON.parse(localStorage.nbHint) >= 5 || JSON.parse(localStorage.nbHint) < 6) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }
}
