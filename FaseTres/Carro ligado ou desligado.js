// Criar um programa para saber se o carro está ligado ou desligado 

var prompt = require("prompt-sync")();

console.log('Responda algumas perguntas com "s" ou "n"');

var barulho = prompt ('Seu carro está fazendo barulho?');
var movimento = prompt ('Seu carro está em movimento?');
var luzes = prompt ('Seu farol está ligado?');

resposta = barulho == "s";
resposta = movimento == "s";
resposta = luzes == "s";

if(resposta)
console.log('O carro está ligado');

// Outra possibilidade

var prompt = require("prompt-sync")();

console.log('Responda algumas perguntas com "s" ou "n"');

var barulho = prompt ('Seu carro está fazendo barulho?');
var movimento = prompt ('Seu carro está em movimento?');
var luzes = prompt ('Seu farol está ligado?');

var resposta = (barulho == 's') || (movimento == 's') && (luzes == 's');

if(resposta)
console.log('O carro está ligado');
else
console.log('O carro está desligado');


