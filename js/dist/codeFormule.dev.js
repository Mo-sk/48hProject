"use strict";

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetTransform = [];

function transformer(x, y) {
  for (var i = 0; i < alphabet.length; i++) {
    var result = ((i + 1) * x + y) % 26;

    if (alphabet[result - 1] === undefined) {
      alphabetTransform.push("z");
    } else {
      alphabetTransform.push(alphabet[result - 1]);
    }
  }

  console.log(alphabet);
  console.log(alphabetTransform);
}