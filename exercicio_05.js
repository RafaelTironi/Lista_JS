/*
Desenvolva um algoritmo que:
➔ Peça um número inteiro ao usuário.
➔ Verifique se o número é par ou ímpar.
O programa deverá:
➔ Se for par, transformá-lo em ímpar.
➔ Se for ímpar, transformá-lo em par.
➔ Mostre o valor final no console.
*/

function transformador_par_impar() {
    let impar = 0;
    let par = 0;
    let numero = parseFloat(prompt("Insira um número: "));

    if (numero % 2 == 0) {
        console.log("Numero par TRANSFORMADO em ímpar")
        impar = numero + 1
        console.log(impar)
    } else {
        console.log("Numero ímpar transformado em par")
        par = numero + 1
        console.log(par)

    }

}