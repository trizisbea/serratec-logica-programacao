/* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False*/ 

var prompt = require("prompt-sync")();

var player1 = prompt('Digite um número inteiro '); 
var num1 = parseInt(player1);
var player2 = prompt('Digite um número inteiro ');
var num2 = parseInt(player2); 

var resultado1 = num1 > num2;
var resultado2 = num2 > num1; 
var resultado3 = player1 == player2;

console.log('Player 1 venceu? ' +  resultado1);
console.log('Player 2 venceu? ' + resultado2);
console.log('Houve empate? ' + resultado3);
  

