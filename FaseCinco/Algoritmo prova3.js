//Algoritmo 

var prompt = require("prompt-sync")();

var pedido1 = prompt('Digite "S" caso deseje pedir o nosso hamburguer '); 

var pedido2 = prompt('Digite "S" caso deseje pedir nossa batata '); 

var pedido3 = prompt('Digite "S" caso deseje pedir nosso refrigerante ');

pedido1 == "S";
pedido2 == "S";
pedido3 == "S";

if(pedido1)
var valor1 = 35;

if(pedido2)
var valor2 = 15; 

if(pedido3)
var valor3 = 15

var preçoFinal = (valor1 + valor2 + valor3);

console.log('O valor da sua conta é ' + preçoFinal + ' reais');