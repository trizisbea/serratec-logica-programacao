/* Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
Tabuada de: 7
7 x 1 = 7
7 x 2 = 14
…
*/ 


const prompt = require("prompt-sync")();

var num = prompt("Digite um número: ");
var tabuada = "";
    
for(var count=0; count<=9 ; count++) 
tabuada += num + " x " + count + " = "+ num * count + "\n";    

var resposta = console.log(" A tabuada do número é: " + tabuada); 