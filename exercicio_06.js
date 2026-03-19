/*
 Crie um algoritmo que peça ao usuário uma letra do alfabeto.
O programa deverá verificar se a letra digitada é:
➔ Vogal
➔ Consoante
E mostrar o resultado no console.
*/

function alfabeto() {
    let letra = prompt("Digite uma letra:");

    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"

    ) console.log("A letra digitada é uma vogal!")
    else (
        console.log("A letra digitada é uma consoante!")
    )

}
//alfabeto();