/* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor. */ 

const prompt = require('prompt-sync')();

console.log('Vamos jogar 21 digital?');

var resultado = 0;

do{
var carta = prompt('Qual o valor da sua carta? '); 
resultado = resultado + parseInt(carta); 
console.log(resultado);


} while (resultado < 21);

if (resultado == 21)
console.log('Você ganhou!');
else 
console.log('Você perdeu!');



