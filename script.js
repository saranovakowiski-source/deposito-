// Botões de reação
const botoesReacao = document.querySelectorAll(".reacoes button");

botoesReacao.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    });
});


// Botão de mudar tema
const btnTemaClaro = document.querySelector(".btn-tema-claro");

btnTemaClaro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-claro")) {
        corpoPagina.classList.remove("tema-claro");
        btnTemaClaro.textContent = "🌕";
    } else {
        corpoPagina.classList.add("tema-claro");
        btnTemaClaro.textContent = "🌑";
    }
}
