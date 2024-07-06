const nextButEl = document.getElementById("next-button");
const prevButEl = document.getElementById("prev-button");
const navigateIndicator = document.getElementById("slider_indicators");
const imgEl = document.getElementById("slide-img");
const pEl = document.getElementById("slide-text");
const hEl = document.getElementById("slide-header");

const slides = [
    { src: "img/test1.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", header: "Slide-header" },
    { src: "img/test2.jpg", text: "Vivamus lacinia odio vitae vestibulum vestibulum.", header: "Picture"},
    { src: "img/test3.jpg", text: "Cras vehicula nisl non lorem pharetra, a pharetra elit suscipit.", header: "My view" }
];

let currentSlideId = 0;

nextButEl.addEventListener("click", () => {
    currentSlideId++;
    updateSlider();
});

prevButEl.addEventListener("click", () => {
    currentSlideId--;
    updateSlider();
});

for (let i = 0; i < slides.length; i++) {
    navigateIndicator.children[i].addEventListener("click", () => {
        if(i !== currentSlideId) {
            currentSlideId = i;
            updateSlider();
        }
    });
}

function updateButtons() {
    if (currentSlideId === 0) {
        prevButEl.classList.add("hidden");
        nextButEl.classList.remove("hidden");
    } else if (currentSlideId === slides.length - 1) {
        nextButEl.classList.add("hidden");
        prevButEl.classList.remove("hidden");
    } else {
        prevButEl.classList.remove("hidden");
        nextButEl.classList.remove("hidden");
    }
}

function updateSlider() {
    updateButtons();
    updateNavigateIndicator();
    imgEl.src = slides[currentSlideId].src;
    pEl.textContent  = slides[currentSlideId].text;
    hEl.textContent = slides[currentSlideId].header;
}

function updateNavigateIndicator() {
    const navigators = navigateIndicator.children;
    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlideId) {
            navigators[i].classList.add("active");
        } else {
            navigators[i].classList.remove("active");
        }
    }
}