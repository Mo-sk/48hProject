let progress = {
    etape1: "",
    etape2: "",
    etape3: "",
    finale: ""
}

if (!localStorage.getItem(progress)) {
    localStorage.setItem(progress)
}

document.querySelector('form').submit(e => {


    let progress = localStorage.getItem("progress");
    progress.etape1 = e.submit.value;
    localStorage
})


