//O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.
//== != > >= < <=

prompt = require("prompt-sync")();

var A = prompt('Digite um número inteiro '); 
var B = prompt('Digite mais um número inteiro ');

var igualdade = A == B;
var diferença = A != B;
var maior = A > B; 
var menor = A < B; 
var maiorigual = A >= B;
var menorIgual = A <= B; 

console.log(igualdade);
console.log(diferença); 
console.log(maior);
console.log(menor); 
console.log(maiorigual);
console.log(menorIgual); 



