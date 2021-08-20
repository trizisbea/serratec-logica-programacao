//Requisito: há um limite de 8 pessoas na loja. O segurança deve liberar se a quantidade de pessoas na loja for < 8

var prompt = require("prompt-sync")();

var A = prompt('Você tem carteira tipo A? S ou N ');
var B = prompt('Você tem carteira tipo B? S ou N ');
var C = prompt('Você tem carteira tipo C? S ou N ');

var resposta1 = A == 'S';
var resposta2 = B == 'S';
var resposta3 = C == 'S';

var resposta = resposta1 && resposta2 && resposta3; 

console.log('Você é motorista profissional?', resposta);

// mesma coisa, usando o condicional 


var prompt = require("prompt-sync")();

var A = prompt('Você tem carteira tipo A? S ou N ');
var B = prompt('Você tem carteira tipo B? S ou N ');
var C = prompt('Você tem carteira tipo C? S ou N ');

var resposta1 = A == 'S';
var resposta2 = B == 'S';
var resposta3 = C == 'S';

var resposta = resposta1 && resposta2 && resposta3; 

if (resposta)
console.log('Você é motorista profissional');


// mesma coisa, usando if e else


var prompt = require("prompt-sync")();

var A = prompt('Você tem carteira tipo A? S ou N ');
var B = prompt('Você tem carteira tipo B? S ou N ');
var C = prompt('Você tem carteira tipo C? S ou N ');

var resposta1 = A == 'S';
var resposta2 = B == 'S';
var resposta3 = C == 'S';

var resposta = resposta1 && resposta2 && resposta3; 

if (resposta)
console.log('Você é motorista profissional');
else 
console.log('Você não é motorista profissional');

