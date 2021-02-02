const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetTransform = [];

function transformer(x, y) {
    for(let i = 0; i < alphabet.length; i++) {
        let result = (i * x + y) % 26;
        alphabetTransform.push(alphabet[result]);
    }

    console.log(alphabetTransform)
}