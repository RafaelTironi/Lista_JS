/*
Uma picoléteria precisa de um sistema simples para mostrar o preço de seus
produtos.
Crie um algoritmo que permita selecionar o sabor do picolé e mostre seu preço
correspondente.
Sabores disponíveis
Código Sabor Preço
a Chocolate R$ 1,50
b Morango R$ 2,50
c Creme R$ 2,50
d Manga R$ 3,20
e Melancia R$ 3,40
f Vanilla Ice R$ 3,00
g Céu Azul R$ 3,60
h Brownie R$ 4,00
i Hawaiano R$ 5,00
O programa deve solicitar o código do sabor e mostrar o preço
correspondente.

*/

function tabaela_piccole (){

    let codigo = prompt("Digite uma letra de a até i")

    if (codigo == "a") {
        console.log("Chocolate - RS1,50")
    } else if (codigo == "b") {
        console.log("Morango - 2,50")
    } else if (codigo == "c") {
        console.log("Creme - 2,50")
    } else if (codigo == "d") {
        console.log("Manga - 3,20")
    } else if (codigo == "e") {
        console.log("Melancia - 3,40")
    } else if (codigo == "f") {
        console.log("Vanilla Ice - 3,00")
    } else if (codigo == "g") {
        console.log("Céu Azul - 3,60")
    } else if (codigo == "h") {
        console.log("Brownie - 4,00")
    } else if (codigo == "i") {
        console.log("Hawaiano - 5,00")
    }

}