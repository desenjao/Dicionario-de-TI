document.addEventListener("DOMContentLoaded", function () {
    exibirUltimasPalavras();
});

function abrirFormulario() {
    document.getElementById("formulario").style.display = "block";
}
function adicionarPalavra() {
    var novaPalavra = document.getElementById("termo").value;
    var novoSignificado = document.getElementById("definicao").value;

    if (novaPalavra && novoSignificado) {
        // Adiciona a nova palavra na lista
        adicionarNaLista({ termo: novaPalavra, definicao: novoSignificado });

        // Fechar o formulário
        
    }
fecharFormulario();
}

function fecharFormulario() {
    document.getElementById("formulario").style.display = "none";
    // Limpar os campos do formulário ao fechar
    document.getElementById("termo").value = "";
    document.getElementById("definicao").value = "";
}



function adicionarNaLista(palavra) {
    // Adiciona a palavra à lista na Home
    exibirPalavraBox("lista-palavras", palavra);

    // Adiciona a palavra à lista em Palavras Adicionadas
    exibirPalavraBox("lista-todas-palavras", palavra);
}

function exibirPalavraBox(listaId, palavra) {
    var listaPalavras = document.getElementById(listaId);

    var novaCaixa = document.createElement("li");
    novaCaixa.classList.add("termo-caixa");

    var nomePalavra = document.createElement("h3");
    nomePalavra.innerText = palavra.termo;
    novaCaixa.appendChild(nomePalavra);

    var significadoPalavra = document.createElement("p");
    significadoPalavra.innerText = palavra.definicao;
    novaCaixa.appendChild(significadoPalavra);

    listaPalavras.appendChild(novaCaixa);
}

function exibirUltimasPalavras() {
    // Exibe as últimas 5 palavras na Home
    exibirUltimasPalavrasNaHome();

    // Exibe todas as palavras em Palavras Adicionadas
    exibirTodasPalavras();
}

function exibirUltimasPalavrasNaHome() {
    var palavrasSalvas = obterPalavrasSalvas("lista-palavras");
    exibirPalavras("lista-palavras", palavrasSalvas.slice(-5));
}

function exibirTodasPalavras() {
    var palavrasSalvas = obterPalavrasSalvas("lista-todas-palavras");
    exibirPalavras("lista-todas-palavras", palavrasSalvas);
}

function exibirPalavras(listaId, palavras) {
    var listaPalavras = document.getElementById(listaId);
    listaPalavras.innerHTML = "";

    palavras.forEach(function (palavra) {
        exibirPalavraBox(listaId, palavra);
    });
}

function obterPalavrasSalvas(listaId) {
    // Obter as palavras salvas a partir do localStorage
    var palavrasSalvas = localStorage.getItem(listaId);

    // Se não houver palavras salvas, retorna um array vazio
    return palavrasSalvas ? JSON.parse(palavrasSalvas) : [];
}

function salvarPalavras(listaId, palavras) {
    // Salva as palavras no localStorage
    localStorage.setItem(listaId, JSON.stringify(palavras));
}

// Chame essa função para iniciar com as palavras já salvas
exibirUltimasPalavras();
