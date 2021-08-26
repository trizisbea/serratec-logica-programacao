const prompt = require("prompt-sync")();

var sapato = [];

sapato[0] = "Sandalia";
sapato[1] = "Bota";
sapato[2] = "Rasteirinha";
sapato[3] = "Tenis azul";
sapato[4] = "Scarpin";
sapato[5] = "Pantufa";

var numero = prompt("Qual o número da gaveta para guardar? ");
var calcado = prompt("Qual sapato você quer guardar? ");

sapato[numero] = calcado;

console.log("Na gaveta " + numero + " está guardado o calçado " + calcado);

