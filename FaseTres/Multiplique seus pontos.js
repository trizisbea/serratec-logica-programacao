// O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.

var prompt = require("prompt-sync")();

var qntCupons = prompt('Digite quantos cupons você tem? ');

console.log('De acordo com seus cupons você tem ' + qntCupons * 3 + ' pontos no programa de fidelidade!');