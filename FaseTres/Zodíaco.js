/*O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!*/ 

const prompt = require('prompt-sync')();

var dia = prompt("Dia do aniversário: ");
var mes = prompt("Mês do aniversário: ");

var inteligente = dia <= 18 && mes == 2 || dia >= 21 && mes == 1;

console.log("Você é inteligente? ", inteligente);