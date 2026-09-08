"use strict";

// Procura os elementos usados na interação.
const botaoOrientacao = document.querySelector("#botao-orientacao");
const painelOrientacao = document.querySelector("#painel-orientacao");

// O mesmo script é carregado nas três páginas.
if (botaoOrientacao && painelOrientacao) {

    botaoOrientacao.addEventListener("click", () => {
        
        const estavaOculto = painelOrientacao.hidden;
        
        painelOrientacao.hidden = !estavaOculto;

        botaoOrientacao.setAttribute(
            "aria-expanded",
            String(estavaOculto)
        );

        botaoOrientacao.textContent = estavaOculto
            ? "Ocultar orientação"
            : "Mostrar orientação";
    });

}

    // Procura o elemento marcado no rodapé.
const anoAtual = document.querySelector("[data-ano-atual]");

// Atualiza somente quando o elemento existe.
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}