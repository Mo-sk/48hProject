if (!localStorage.getItem('nbHint')) {
    localStorage.setItem('nbHint', 0);
}


let hint = ["Je n'apprécie pas être révélé au grand jour", "Ne me titillez pas, cela me chatouille", "Beep-B00p B11p-Boop - 83 585 n'est pas dans le bon ordre", "J'ai la nausée à cause de vous ! GARDES !", "Un QR Code.. comme c'est original"]

function giveHint() {

    if (window.location.href.includes('index')) {
        if (JSON.parse(localStorage.nbHint) >= 0 && JSON.parse(localStorage.nbHint) < 3) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }

    }
    if (window.location.href.includes('hidden')) {
        if (JSON.parse(localStorage.nbHint) >= 3 && JSON.parse(localStorage.nbHint) < 5) {
            console.log(`hint: ${hint[localStorage.nbHint]}`)
        }
        else {
            console.log(`Il n'y a plus d'indice pour cette étape`)
        }


    }
    if (window.location.href.includes('crypt')) {
        if (JSON.parse(localStorage.nbHint) >= 5 && JSON.parse(localStorage.nbHint) < 6) {
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
