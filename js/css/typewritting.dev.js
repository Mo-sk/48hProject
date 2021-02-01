"use strict";

var tab_phrases_type_effect = ["La Formule secrète", 'ne doit jamais', "être révélé"];
var div_type_effect_phrases = document.getElementById("type_effect_phrases");

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

function write_effect(phrase) {
  var i;
  return regeneratorRuntime.async(function write_effect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < phrase.length)) {
            _context.next = 8;
            break;
          }

          div_type_effect_phrases.innerHTML += phrase.charAt(i);
          _context.next = 5;
          return regeneratorRuntime.awrap(delay(30));

        case 5:
          i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function erase_effect(phrase) {
  var i;
  return regeneratorRuntime.async(function erase_effect$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          i = phrase.length;

        case 1:
          if (!(i > 0)) {
            _context2.next = 8;
            break;
          }

          div_type_effect_phrases.innerHTML = div_type_effect_phrases.innerHTML.slice(0, -1);
          _context2.next = 5;
          return regeneratorRuntime.awrap(delay(10));

        case 5:
          i--;
          _context2.next = 1;
          break;

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function loop_write_effect() {
  var _i, _tab_phrases_type_eff, phrase;

  return regeneratorRuntime.async(function loop_write_effect$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _i = 0, _tab_phrases_type_eff = tab_phrases_type_effect;

        case 1:
          if (!(_i < _tab_phrases_type_eff.length)) {
            _context3.next = 14;
            break;
          }

          phrase = _tab_phrases_type_eff[_i];
          _context3.next = 5;
          return regeneratorRuntime.awrap(write_effect(phrase));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(delay(1500));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(erase_effect(phrase));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(delay(0));

        case 11:
          _i++;
          _context3.next = 1;
          break;

        case 14:
          ;
          loop_write_effect();

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  });
}

loop_write_effect();