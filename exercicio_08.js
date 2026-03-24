/*
Crie um programa que declare duas variáveis inteiras e atribua valores a elas.
O programa deverá mostrar:
➔ a) A diferença entre as duas variáveis.
➔ b) O dobro da primeira variável somado ao triplo da segunda.
➔ c) A multiplicação das duas variáveis.
*/

function op_variaveis(){
    let numero = prompt("Digite o primeiro número: ");
    let numero2 = prompt("Digite o segundo número: ");

    console.log (numero-numero2);
    console.log ((2*numero) + (3*numero2));
    console.log (numero*numero2);
}