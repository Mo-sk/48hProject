const code = document.querySelector('.code')
code.addEventListener("keypress", (e) => {
    if(code.value.length % 6 === 5 && code.value.length < 23) {
        code.value = code.value + '-';
    }
    code.value = code.value.toUpperCase();

    if(e.key === 'Enter' && code.value == 'R9UNV-VPJH4-LK30S-2GYE4') {
        document.querySelector('.answer').innerHTML = "<img src='./images/QRCode.png'>"
    }
})