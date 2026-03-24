/*
*/

function folha_pagamento_variavel() {
    let salario_liq = 0;
    let nome = prompt("Nome do funcionario:");
    let salario = prompt("Salário:");

    if (salario < 1001) {
        salario_liq = (salario * 0.92);
        console.log("Salario Informado: " + salario);
        console.log("Taxa de desconto aplicada: 8%");
        console.log("O valor do desconto foi de:" + (salario * 0.08));
        console.log("Salário líquido: " + salario_liq);

    } else if (salario > 1001 & salario < 1501) {
        salario_liq = (salario * 0.915);
        console.log("Salario Informado: " + salario);
        console.log("Taxa de desconto aplicada: 8,5%");
        console.log("O valor do desconto foi de:" + (salario * 0.085));
        console.log("Salário líquido: " + salario_liq);
    } else {
        salario_liq = (salario * 0.91);
        console.log("Salario Informado: " + salario);
        console.log("Taxa de desconto aplicada: 9%");
        console.log("O valor do desconto foi de:" + (salario * 0.09));
        console.log("Salário líquido: " + salario_liq);
    }



}