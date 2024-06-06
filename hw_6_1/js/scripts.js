let fraze = prompt("enter your text:")
let charForRem = prompt("enter chars separated by commas:")

let chars = charForRem.split(",");

function removeCharFromFraze(fraze, charsToRemove) {
    for(const value of charsToRemove) {
        fraze = fraze.replaceAll(value.trim(), "");
    }
    return fraze;
}

let result = removeCharFromFraze(fraze, chars);

console.log(result);