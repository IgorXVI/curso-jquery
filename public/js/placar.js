function inserePlacar() {
    var placar = $(".placar");
    var corpoTabela = placar.find("tbody");

    var usuario = "Igor";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);

    corpoTabela.append(linha);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");

    var colunaUsuario = $("<td>").text(usuario);

    var colunaPalavras = $("<td>").text(palavras);

    var colunaRemover = $("<td>");
    var link = $("<a>").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

$(".botao-remover").click(event, function () {
    event.preventDefault();
    $(this).parent().parent().remove();
})