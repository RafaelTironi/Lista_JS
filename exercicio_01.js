/*console.log("Ola, Mundo");

let nome ="Tyrone"
let idade = 24;
let peso = 60.7;
let sabe = true;

console.log("Meu nome é " + nome);
*/

function somarNumeros() {
    let soma = 0
    let contnuar = true
    while (contnuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar);"));

        if (!isNaN(numero)) {
            soma += numero;
        }else{
            alert("Por favor, insira um númro válido!");
        }
        contnuar = confirm("Deseja adicionar mais números?");
    }
    alert("A soma dos números é: " + soma);
};

//somarNumeros();