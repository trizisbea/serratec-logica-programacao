//Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

var prompt = require("prompt-sync")();

var numero1 = prompt('Digite um número inteiro '); 
var numero2 = prompt('Digite mais um número inteiro ');

var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var adição = (num1 + num2);   
var subtração = (num1 - num2);
var multiplicação = (num1 * num2); 
var divisão = (num1 / num2);

console.log(adição); 
console.log(subtração);
console.log(multiplicação);
console.log(divisão);

