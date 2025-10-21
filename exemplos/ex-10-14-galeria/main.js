const miniaturas = document.querySelectorAll(".miniaturas img");
const imgDestaque = document.querySelector(".destaque img");

miniaturas.forEach( miniatura => {
    miniatura.addEventListener("click", evento => {
        evento.target.classList.add("ativa");
        imgDestaque.src = evento.target.src;
    })
})