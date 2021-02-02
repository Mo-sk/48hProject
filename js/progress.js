
let progress = {
    etape1: "",
    etape2: "",
    etape3: "",
    finale: ""
}

if (!localStorage.getItem('progress')) {
    localStorage.setItem("progress", JSON.stringify(progress));
    console.log(localStorage.getItem(progress))
}

document.querySelector(`.form-container`).addEventListener("submit", e => {
    e.value
    e.preventDefault()
    console.log(e.target[0].value)
    /*  let progress = localStorage.getItem("progress");
     progress.etape1 = e.submit.value;
     localStorage */
    if (e.target[0].value === "Pr0jet48hYgroupe2") {
        let progress = JSON.parse(localStorage.getItem("progress"));

        progress.etape1 = e.target[0].value;

        localStorage.progress = JSON.stringify(progress);
        document.querySelector(`body`).innerHTML += `<div class="progress"><p class="font-bold text-white texte-xl">Félicitation Pour avoir compris une partie du message de césar,<br> en remerciement il vous offre ceci </p><spanclass="font-semibold text-gray-200 texte-md">tvlnhvyozlnhlaphzlnhlap</spanclass=></div>`;
    }

    if (e.target[0].value === "alea jacta est" && localStorage.progress != "") {
        let progress = JSON.parse(localStorage.getItem("progress"));

        progress.etape2 = e.target[0].value;

        localStorage.progress = JSON.stringify(progress);
    }

    if (e.target[0].value === "7.5" && JSON.parse(localStorage.progress).etape2 != "" && localStorage.progress.etape1 != "") {
        let progress = JSON.parse(localStorage.getItem("progress"));

        progress.etape3 = e.target[0].value;

        localStorage.progress = JSON.stringify(progress);
    }

    if (e.target[0].value === "quaesuntcaesariscaesari" && JSON.parse(localStorage.progress).etape1 != "" && JSON.parse(localStorage.progress).etape2 != "" && JSON.parse(localStorage.progress).etape3 != "") {
        let progress = JSON.parse(localStorage.getItem("progress"));

        progress.finale = e.target[0].value;

        localStorage.progress = JSON.stringify(progress);
        document.querySelector(`body`).innerHTML += `<div class="success"><p class="font-semibold text-white texte-xl">Félicitation Pour avoir compris le code finale de César qui était :<span class="font-bold text-gray-200 texte-xl">quae sunt caesaris, caesari</span></p></div>`;
    }
})

function fill() {
    document.querySelector(`#hidden-knight`).setAttribute('aria-label', 'alea jacta est')
}
