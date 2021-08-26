/* Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira. */

const prompt = require("prompt-sync")();

var sol = prompt("Como está o tempo hoje? Digite sol ou chuva: ");

if (sol == 'sol'){
console.log('Ir à praia pela manhã');
console.log('Levar um lanche');}
else {
console.log('Estudar pela manhã'); 
console.log('Comer feijoada'); }


console.log('Assistir TV e tirar um cochilo pela tarde'); 


