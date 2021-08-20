
//* Requisito: para saber se o motorista é profissional, ele precisa ser habilitado nas categorias A, B e C.

var prompt = require("prompt-sync")();

//Entradas 
var A = prompt('Você tem habilitação tipo A? Digite s ou n ');
var B = prompt('Você tem habilitação tipo B? Digite s ou n ');
var C = prompt('Você tem habilitação tipo C? Digite s ou n ');

//Processamento 

var motoca = (A == 's');
var carro = (B == 's');
var vuc = (C == 's');

var resposta = motoca && carro && vuc; 

//Saída
console.log('Você é motorista de verdade?', resposta); 
