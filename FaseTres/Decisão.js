//Se (condição for atendida), então 

var prompt = require("prompt-sync")();

var pergunta = prompt("Você está vacinado? SIM ou NÃO? ");

var estaVacinado = ''

estaVacinado = pergunta == 'SIM'; 

if (estaVacinado)
console.log("Parabéns!");

// Ensino Superior

var prompt = require("prompt-sync")();

var pergunta = prompt('Você tem ensino superior? SIM ou NAO ');

var resposta = ''

resposta = pergunta  == 'NAO';

if (resposta)
console.log('Então você não fez faculdade.');

//Uso de if e else 

var prompt = require("prompt-sync")();

var pergunta = prompt('Você está vacinado? Digite SIM ou NAO ');
  
var resposta = ''

resposta = pergunta == 'SIM';

if (resposta)
console.log('Parabéns, aguarde a segunda dose!');
else 
console.log('Daqui a pouco chega a sua vez');

// Ensino Superior if else 
var prompt = require("prompt-sync")();

var pergunta = prompt('Você fez faculdade? Digite SIM ou NAO '); 

var resposta = '';

resposta = pergunta == 'SIM';

if (resposta) 
console.log('Entao você tem ensino superior');
else
console.log('Entao você não tem ensino superior');
