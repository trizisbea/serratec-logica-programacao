/* O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.
Valor: 1202.00
Pagamento em cheque.
Valor: 336.00
Pagamento em dinheiro. */ 

var prompt = require("prompt-sync")();

var val = prompt('Qual o valor do pagamento? ');

valor = parseInt(val);

if (valor >= 1000)
var pagamento = 'cheque'
else 
var pagamento = 'dinheiro'

console.log('Valor: ' + valor);
console.log('Pagamento em ' + pagamento);