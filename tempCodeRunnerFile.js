//Algoritmo 

var prompt = require("prompt-sync")();

var pedido1 = prompt('Qual hambúrguer você deseja? Digite A ou B'); 

var pedido2 = prompt('Qual tamanho de batata você deseja? Digite P ou G'); 

var pedido3 = prompt('Qual refrigerante você deseja? Digite A ou B'); 

//Pedido


var hamburguerA = (pedido1 == "A");
var hamburguerB = (pedido1 == "B");

var batataP = (pedido2 == "P");
var batataG = (pedido2 == "G");

var refriA = (pedido3 == "A"); 
var refriB = (pedido3 == "B");

//Precificação 

var hamburguerA = 10;
var hamburguerB = 15;

var batataP = 12;
var batataG = 17;

var refriA = 15;
var refriB = 18;

var preçoFinal = (pedido1 + pedido2 +pedido3);

console.log('O valor da sua conta é ' + preçoFinal + ' reais');