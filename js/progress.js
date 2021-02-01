let progress = {
    etape1: "",
    etape2: "",
    etape3: "",
    finale: ""
}

if (localStorage.progress == "") {
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
    if(e.target[0].value === "Pr0jet48hYgroupe2") {
        let progress = JSON.parse(localStorage.getItem("progress"));
        
        progress.etape1 = e.target[0].value;
        
        localStorage.progress =  JSON.stringify(progress);
    }

    if(e.target[0].value === "LeDeuxièmeCodee" && localStorage.progress != "") {
        let progress = JSON.parse(localStorage.getItem("progress"));
        
        progress.etape2 = e.target[0].value;
        
        localStorage.progress =  JSON.stringify(progress);
    }

    if(e.target[0].value === "TroisièmeCodeee" && localStorage.progress.etape2 != "" && localStorage.progress.etape1 != "") {
        let progress = JSON.parse(localStorage.getItem("progress"));
        
        progress.etape2 = e.target[0].value;
        
        localStorage.progress =  JSON.stringify(progress);
    }
})


