const prompt = require("prompt-sync")(); 

var sapato = []; 

sapato[0] = 'tenis';
sapato[1] = 'mocassim';
sapato[2] = 'chinela'; 

var calcado = prompt('Qual o calcado?');
var gaveta = prompt('qual a gaveta?');

sapato[gaveta] = calcado