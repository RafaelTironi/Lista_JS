/*

Crie um algoritmo que solicite 4 valores inteiros ao usuário.
Ao final, o programa deve mostrar os números em ordem decrescente.

*/

function ordem_valor() {
    let numeros = []
    let temp = 0
    for (i = 0; i < 4; i++) {
        let numero = parseInt(prompt("Digite um número:"));
        numeros.push(numero);

        

        numeros.sort();
        numeros.reverse();
    };
    
    console.log(numeros);


};

ordem_valor();