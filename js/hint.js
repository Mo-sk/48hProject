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
    étape 4 -   | index 4
    étape 4a -  | index 5
    étape 4b - Texte malvoyant pas encore trouvé    | index 6
    étape 4c - Texte malvoyant trouvé -> donner indice sur la clef César | index 7 -> inférieur à 22

}

page 3 {
    étape 5 -   | index 8
    étape 5a -  | index 9
    étape 5b -  | index 10
    étape 5c - Le QR Code donne ->  | index 11
}
*/
if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}

if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}


let hint = ["Je n'apprécie pas être révélé au grand jour", "Ne me titillez pas, cela me chatouille", "83 585 n'est pas dans le bon ordre", "BEEP-b00p B11P-boop", "", ""]

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
