//Conjunção 

var estudo = false; 
var revisar = false; 

var final = estudo && revisar;

console.log('O aluno passou na prova?', final);

//Disjunção 

var choro = false; 
var estudo = false; 

var final = choro || estudo;

console.log(final);

//Exemplo da carteira

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



