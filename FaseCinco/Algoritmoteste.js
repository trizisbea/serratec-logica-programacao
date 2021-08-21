var prompt = require("prompt-sync")();

var pedido1 = prompt('Digite "S" caso deseje pedir o nosso hamburguer '); 
var pedido2 = prompt('Digite "S" caso deseje pedir nossa batata '); 
var pedido3 = prompt('Digite "S" caso deseje pedir nosso refrigerante ');


if(pedido1 == 'S')
pedido1 = 35;
else
pedido1 = 0

if(pedido2 == 'S')
pedido2 = 15; 
else
pedido2 = 0

if(pedido3 == 'S')
pedido3 = 15
else
pedido3 = 0

var preçoFinal = (pedido1 + pedido2 + pedido3);

console.log('O valor da sua conta é ' + preçoFinal + ' reais');



// O restaurante 'Zépa Lanches' conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida. O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente nos valores R$35, R$15 e R$15). 

var prompt = require("prompt-sync")();

do{
var pedido1 = prompt('Digite "S" caso deseje pedir o nosso hamburguer vegetariano ');
var pedido2 = prompt('Digite "S" caso deseje pedir nossa batata frita com queijo ');
var pedido3 = prompt('Digite "S" caso deseje pedir nosso refrigerante ');

if(pedido1 == 'S')
pedido1 = 35;
else
pedido1 = 0

if(pedido2 == 'S')
pedido2 = 15; 
else
pedido2 = 0

if(pedido3 == 'S')
pedido3 = 15
else
pedido3 = 0

var preçoFinal = (pedido1 + pedido2 + pedido3);
}
while(preçoFinal <= 0) //o algoritmo recomeça caso o cliente escolha todas as opções com um string inválido

console.log('O valor da sua conta é ' + preçoFinal + ' reais');