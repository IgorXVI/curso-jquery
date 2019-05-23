var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(() => {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {

    var frase = $(".frase").text();
    campo.on("input", function () {
        var digitado = campo.val();
        var digitouCorreto = frase.startsWith(digitado);

        if (digitouCorreto) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");

            var qtdPalavras = digitado.split(" ").length;
            $("#contador-palavras").text(qtdPalavras);

            var qtdCaracteres = digitado.length;
            $("#contador-caracteres").text(qtdCaracteres);

        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", () => {

        $("#botao-reiniciar").attr("disabled", true);

        var cronometroID = setInterval(() => {

            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            if (tempoRestante <= 0) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                $("#botao-reiniciar").attr("disabled", false);
                campo.toggleClass("campo-desativado");
                inserePlacar();
            }

        }, 1000);

    });
}

function reiniciaJogo() {
    $("#tempo-digitacao").text(tempoInicial);
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}