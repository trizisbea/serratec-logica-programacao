//Algoritmo 

var prompt = require("prompt-sync")();

var pedido1 = prompt('Qual hambúrguer você deseja? Digite A ou B '); 

var pedido2 = prompt('Qual tamanho de batata você deseja? Digite P ou G '); 

var pedido3 = prompt('Qual refrigerante você deseja? Digite Y ou Z '); 


var hamburguerA = (pedido1 == "A");
var hamburguerB = (pedido1 == "B");

var batataP = (pedido2 == "P");
var batataG = (pedido2 == "G");

var refriA = (pedido3 == "Y"); 
var refriB = (pedido3 == "Z");


if(pedido1) 
hamburguerA = 15;

if(pedido2)
var hamburguerB = 10;

if(batataP)
var batataP = 10;

if(batataG)
var batataG = 18;

if(refriY)
var refriY = 14;

if (refriZ)
var refriZ = 11;


var preçoFinal = (pedido1 + pedido2 + pedido3);

console.log('O valor da sua conta é ' + preçoFinal + ' reais');