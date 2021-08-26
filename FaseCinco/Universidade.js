/* Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true */

const prompt = require("prompt-sync")();

var dia = prompt("Digite o dia de hoje: ");
var numero = prompt("Qual o número do seu boleto? ");

var desconto = (dia == '10') || (dia == '11') || (dia == '12') || (dia == '13'); 

console.log('Dia hoje: ' + dia);
console.log('Número do Boleto: ' + numero);
console.log('Dia de pagamento: 15 ');
console.log('Desconto na próxima mensalidade? ' + desconto);