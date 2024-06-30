let link;

const setLinkButton = document.getElementById("setLink");
const redirectButton = document.getElementById("redirect");

setLinkButton.addEventListener("click", ()=>{
    link = prompt("Enter redirect link");
});

redirectButton.addEventListener("click", ()=>{
    window.location.href = link;
});