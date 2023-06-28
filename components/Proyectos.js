const proyecto = document.getElementById("Descarga")

proyecto.addEventListener("mousemove",(e) => {
    e.target.style.height = "90%";
});

proyecto.addEventListener("mouseout",(e) => {
    e.target.style.height = "50%";
});



