if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}

console.log("Comme césar disais <<Deus ex Machina>>, si vous êtes perdu demandez de l'aide à la machine grâce à la fonction giveHint()")
let hint = [
    "Ah ouais, ça fonctionne.. c'est Stylé le XXIème siècle",
    "Je n'apprécie pas être révélé au grand jour",
    "Ne me titillez pas, cela me chatouille",
    "BEEP-b00p B11P-boop - 83 585 n'est plus dans le bon ordre je les ai mélangés pardon, aidez-moi.",
    "Drôle de suite! Tien c'est quoi ce truc là..? La fonction 'find' ?",
    "Ne prendrions pas un peu de recul ?",
    "Tous les chemins mènent à Rome",
    "BEEP-b00p B11P-boop - la frontiere entre l'homme et la machine est fine",
    "BEEP-b00p B11P-boop - Les grand Hommes seront toujours les premiers et les autres des suiveurs",
    "Une fois rentré à Rome, César se rend compte qu'un de ses gardes n'est plus visible",
    "Tendez-donc un peu l'oreille",
    "Je suis juste là devant vous, écoutez moi!",
    "Nous pouvons tous voir le bon fond à l'intérieur de chacun, il suffit de s'en donner les moyens",
    "Un QR Code.. comme c'est original",
    "César a toujours eu peur que ses message soientt interceptés par l'enemie",
    "un chiffrement évolué avec une double clé ?? Qu'est-ce que c'est que ça encore...",
    "il n'y a plus d'indice à présent, je t'ai assez aidé comme ça t'es vraiment pas fortiche.",

]

function giveHint() {
    let nbHint = JSON.parse(localStorage.getItem("nbHint"));

    nbHint++;
    if (window.location.href.includes('index')) {
        if (JSON.parse(localStorage.nbHint) >= 0 && JSON.parse(localStorage.nbHint) < 3) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
            localStorage.nbHint = JSON.stringify(nbHint);

        } else if (JSON.parse(localStorage.progress).etape1 == "" && JSON.parse(localStorage.nbHint) > 6 && JSON.parse(localStorage.nbHint) <= 8) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
            localStorage.nbHint = JSON.stringify(nbHint);
        } else {
            console.log(`Il n'y a plus d'indice pour cette étape`)

        }

    }
    if (window.location.href.includes('wiki')) {
        if (JSON.parse(localStorage.nbHint) >= 3 && JSON.parse(localStorage.nbHint) < 7) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
            localStorage.nbHint = JSON.stringify(nbHint);
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)

        }
    }
    if (window.location.href.includes('garde')) {
        if (JSON.parse(localStorage.nbHint) >= 8 && JSON.parse(localStorage.nbHint) < 13) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
            localStorage.nbHint = JSON.stringify(nbHint);
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }


    }
    if (window.location.href.includes('crypt')) {
        if (JSON.parse(localStorage.nbHint) >= 13 && JSON.parse(localStorage.nbHint) < 16) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
            localStorage.nbHint = JSON.stringify(nbHint);
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }


}
