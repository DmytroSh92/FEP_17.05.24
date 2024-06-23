function showRandomImg() {
    document.getElementById("img_js").setAttribute("src", `image/${getRandomInt()}.jpg`);
}

function getRandomInt(min = 1, max = 9) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

showRandomImg();