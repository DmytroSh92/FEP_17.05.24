const button = document.getElementById("js_button");
let defaultColor;
const color = "blue";
button.addEventListener('click', () => {
    const text = document.getElementById("text");

    if(defaultColor === undefined) {
        if(text.style.color.trim() === "") {
            defaultColor = "black";
        } else {
            defaultColor = text.style.color;
        }
    }

    if(text.style.color === color) {
        text.style.color = defaultColor;
    } else {
        text.style.color = color;
    }
});