/* Filhinho do Eduardo e Mônica ficou de recuperação?
O algoritmo é bem simples. Digitar 4 notas, ou seja, precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas, precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação. */ 

const prompt = require("prompt-sync")();

var mat = prompt('Qual foi sua nota de matemática? ');
var port = prompt('Qual foi sua nota de português? ');
var bio = prompt('Qual foi sua nota de biologia? ');
var hist = prompt('Qual foi sua nota de história? ');

var notamat = parseInt(mat);
var notaport = parseInt(port);
var notabio = parseInt(bio);
var notahist = parseInt(hist);

var soma = (notamat + notaport + notabio + notahist) / 4 

if (soma > 7)
console.log('Filhinho de Eduardo e Mônica passou na escola!');
else 
console.log('Filhinho de Eduardo e Mônica ficou de recuperação!');