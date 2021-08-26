//Aguardando a resposta certa
//O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!

//teste no fim

var prompt = require('prompt-sync')();

do{

var telefone = prompt('Ligando pra você ');
 
var nãoacertou = (telefone != '90 FM é show');


if(nãoacertou)
console.log('Que pena...');
else 
console.log('Parabéns, você ganhou!');
}

while(nãoacertou);