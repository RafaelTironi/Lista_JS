/*
A empresa Mawer precisa realizar seu balanço financeiro anual.
Crie um algoritmo que:
Solicite para cada um dos 12 meses do ano:
 ● O ganho bruto do mês
 ● Os gastos do mês
Ao final, o programa deverá mostrar:
 ● Ganho bruto anual
 ● Gasto anual
 ● Saldo financeiro anual
O programa também deverá informar se a empresa teve:
 ● Lucro
 ● Prejuízo
*/


function balanco() {

    let soma = 0
    let soma2 = 0
    let numero = 0
    let numero2 = 0
    let saldo = 0
    for (let i = 0; i <= 12; i++) {

        let numero = parseFloat(prompt("Informe o ganho bruto deste mês:"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            console.log("Ganho bruto:" + soma);
        }

        let numero2 = parseFloat(prompt("Informe os gastos deste mês:"));

        if (!isNaN(numero2)) {
            soma2 += numero2;
        } else {
            console.log("Gasto:" + soma2);
        }

    };

    saldo = soma - soma2

    console.log("Ganho bruto anual: " + soma);
    console.log("Gasto anual: " + soma2);
    console.log("O saldo final da empresa é de R$" + saldo)
    if ((soma) > (soma2)) {
        console.log("Seu saldo é positivo")
    } else {
        console.log("Seu saldo é negativo")
    }
}

//balanco();