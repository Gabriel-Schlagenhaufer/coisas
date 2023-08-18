function operacao(escolha) {
    if (escolha == 1) {
        var valor1 = parseFloat(document.getElementById("valor-soma1").value);
        var valor2 = parseFloat(document.getElementById("valor-soma2").value);
        document.getElementById("resultado-soma").value = valor1 + valor2;
    } else if (escolha == 2) {
        var valor1 = parseFloat(document.getElementById("valor-subtracao1").value);
        var valor2 = parseFloat(document.getElementById("valor-subtracao2").value);
        document.getElementById("resultado-subtracao").value = valor1 - valor2;
    } else if (escolha == 3) {
        var valor1 = parseFloat(document.getElementById("valor-multiplicacao1").value);
        var valor2 = parseFloat(document.getElementById("valor-multiplicacao2").value);
        document.getElementById("resultado-multiplicacao").value = valor1 * valor2;
    } else if (escolha == 4) {
        var valor1 = parseFloat(document.getElementById("valor-divisao1").value);
        var valor2 = parseFloat(document.getElementById("valor-divisao2").value);
        document.getElementById("resultado-divisao").value = valor1 / valor2;
    }
}

function limpar(escolha) {
    if (escolha == 1) {
        document.getElementById("valor-soma1").value = "";
        document.getElementById("valor-soma2").value = "";
        document.getElementById("resultado-soma").value = "";
    } else if (escolha == 2) {
        document.getElementById("valor-subtracao1").value = "";
        document.getElementById("valor-subtracao2").value = "";
        document.getElementById("resultado-subtracao").value = "";
    } else if (escolha == 3) {
        document.getElementById("valor-multiplicacao1").value = "";
        document.getElementById("valor-multiplicacao2").value = "";
        document.getElementById("resultado-multiplicacao").value = "";
    } else if (escolha == 4) {
        document.getElementById("valor-divisao1").value = "";
        document.getElementById("valor-divisao2").value = "";
        document.getElementById("resultado-divisao").value = "";
    }
}