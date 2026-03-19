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
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganho = parseFloat(prompt("Digite o ganho bruto do mês " + i + ":"));
        let gasto = parseFloat(prompt("Digite os gastos do mês " + i + ":"));

        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    let saldo = ganhoAnual - gastoAnual;

    alert("Ganho bruto anual: " + ganhoAnual);
    alert("Gasto anual: " + gastoAnual);
    alert("Saldo financeiro anual: " + saldo);

    if (saldo > 0) {
        alert("A empresa teve LUCRO");
    } else if (saldo < 0) {
        alert("A empresa teve PREJUÍZO");
    } else {
        alert("A empresa ficou no ZERO");
    }
}