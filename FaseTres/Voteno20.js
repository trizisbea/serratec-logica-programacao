//No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

var prompt = require("prompt-sync")();

var idade = prompt('Digite sua idade '); 

maior = idade >= 17;

console.log('Você já pode votar? ' + maior);
