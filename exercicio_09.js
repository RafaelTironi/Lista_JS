/*
Crie um programa que declare duas variáveis inteiras.
O programa deve mostrar no console:
Os dois valores do maior para o menor.
*/

function ordem_dois_numeros() {
    let numero1 = prompt("Insira o numero 1:")
    let numero2 = prompt("Insira o numero 2:")

    if (numero1 > numero2) {
        console.log(numero1, numero2)
    } else {
        console.log(numero2, numero1)

    }


}