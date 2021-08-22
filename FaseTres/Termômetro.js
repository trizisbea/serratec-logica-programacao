// O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.


var prompt = require("prompt-sync")();

var C = prompt('Qual a temperatura em graus Celsius?');

var F = (9 * C + 160)/5; 

console.log(F); 


