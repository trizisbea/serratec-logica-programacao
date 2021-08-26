/* Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76
*/ 

var prompt = require("prompt-sync")();

var total = prompt('Digite o valor total de suas vendas: '); 

var comissao = (total * 0.05); 
var adicional = (comissao * 0.09);

console.log('Vendas totais: ' + total);
console.log('Sua comissão: ' + comissao);
console.log('Valor adicional: ' + adicional);

