const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("js got clicked");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
})

const btnTemaClaro = document .querySelector (".btn-tema-claro")

btnTemaClaro.addEventListener("click", botaoClicado)

function mudaTema() {
    const corpoPagina = document.body;
    if(corpoPagina.classList.contains("tema-claro")) {
       corpoPagina.classList.remove("tema-claro");
    } else {
         corpoPagina.classList.add("tema-claro");
    }
}