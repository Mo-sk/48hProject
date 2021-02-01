"use strict";

var menu_transition = document.getElementById("div_menu");
var layers = document.getElementsByClassName("transition_color");
menu_transition.addEventListener('click', function () {
  setTimeout(function () {
    document.getElementById("background_menu_index_bar").classList.toggle('d-none');
  }, 400);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var layer = _step.value;
      layer.classList.toggle("active");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
$('#div_menu').click(function () {
  $('.barre_1').toggleClass('active_menu_bar1'), $('.barre_2').toggleClass('active_menu_bar2'), $('.barre_3').toggleClass('d-none');
  setTimeout(function () {
    $('#background_menu').toggleClass('d-flex');
  }, 500);
});
$('#home_option').mouseenter(function () {
  $('#div_background_menu_selected').addClass('active_hover_home');
}).mouseleave(function () {
  $('#div_background_menu_selected').removeClass();
});
$('#hidden_option').mouseenter(function () {
  $('#div_background_menu_selected').addClass('active_hover_hidden');
}).mouseleave(function () {
  $('#div_background_menu_selected').removeClass();
});
$('#crypt_option').mouseenter(function () {
  $('#div_background_menu_selected').addClass('active_hover_crypt');
}).mouseleave(function () {
  $('#div_background_menu_selected').removeClass();
});