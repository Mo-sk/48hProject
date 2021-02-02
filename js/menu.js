const menu_transition = document.getElementById("div_menu");
let layers = document.getElementsByClassName("transition_color");

menu_transition.addEventListener('click', () => {
    setTimeout(function () {
        document.getElementById("background_menu_index_bar").classList.toggle('d-none');
    }, 400);
    for (let layer of layers) {
        layer.classList.toggle("active");
    }
});

$('#div_menu').click(function () {
    $('.barre_1').toggleClass('active_menu_bar1'),
    $('.barre_2').toggleClass('active_menu_bar2'),
    $('.barre_3').toggleClass('d-none');
    setTimeout(
        function () {
            $('#background_menu').toggleClass('d-flex')
        }, 500);
});

$('#accueil_option')
    .mouseenter(function () {
        $('#div_background_menu_selected').addClass('active_hover_home')
    })
    .mouseleave(function () {
        $('#div_background_menu_selected').removeClass()
    });

$('#propos_option')
    .mouseenter(function () {
        $('#div_background_menu_selected').addClass('active_hover_hidden')
    })
    .mouseleave(function () {
        $('#div_background_menu_selected').removeClass()
    });

$('#projets_option')
    .mouseenter(function () {
        $('#div_background_menu_selected').addClass('active_hover_crypt')
    })
    .mouseleave(function () {
        $('#div_background_menu_selected').removeClass()
    });

$('#contact_option')
    .mouseenter(function () {
        $('#div_background_menu_selected').addClass('active_hover_code')
    })
    .mouseleave(function () {
        $('#div_background_menu_selected').removeClass()
    });