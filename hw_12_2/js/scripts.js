const buttons = document.getElementById("buttons_section");

buttons.addEventListener("click", (event)=>{
    alert(event.target.textContent)
});
