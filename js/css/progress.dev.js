"use strict";

var progress = {
  etape1: "",
  etape2: "",
  etape3: "",
  finale: ""
};

if (localStorage.progress == "") {
  localStorage.setItem("progress", JSON.stringify(progress));
  console.log(localStorage.getItem(progress));
}

document.querySelector(".form-container").addEventListener("submit", function (e) {
  e.value;
  e.preventDefault();
  console.log(e.target[0].value);
  /*  let progress = localStorage.getItem("progress");
   progress.etape1 = e.submit.value;
   localStorage */

  if (e.target[0].value === "Pr0jet48hYgroupe2") {
    var _progress = JSON.parse(localStorage.getItem("progress"));

    _progress.etape1 = e.target[0].value;
    localStorage.progress = JSON.stringify(_progress);
  }

  if (e.target[0].value === "LeDeuxièmeCodee" && localStorage.progress != "") {
    var _progress2 = JSON.parse(localStorage.getItem("progress"));

    _progress2.etape2 = e.target[0].value;
    localStorage.progress = JSON.stringify(_progress2);
  }

  if (e.target[0].value === "TroisièmeCodeee" && localStorage.progress.etape2 != "" && localStorage.progress.etape1 != "") {
    var _progress3 = JSON.parse(localStorage.getItem("progress"));

    _progress3.etape2 = e.target[0].value;
    localStorage.progress = JSON.stringify(_progress3);
  }
});