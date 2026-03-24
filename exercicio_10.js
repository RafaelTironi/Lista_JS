/*
Crie um programa que simule uma folha de pagamento simples.
O programa deve solicitar:
➔ Nome do funcionário
➔ Salário bruto
➔ Considere que a taxa de desconto do INSS é de 8%.
O programa deverá mostrar:
➔ Nome do funcionário
➔ Salário bruto
➔ Valor do desconto do INSS
➔ Salário líquido
*/

function folha_pagamento() {
    let nome = prompt("Nome do funcionario:")
    let salario = prompt("Salário:")

    /*INSS = 8%*/

    console.log("Seu nome:" + nome)
    console.log("Seu salário bruto:" + salario)
    console.log("Valor do desconto do INSS: 8%")
    console.log("Seu salário líquido é:" + (salario * 0.92))
}