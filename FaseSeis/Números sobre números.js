/* Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência. */

const prompt = require('prompt-sync')();  

var resposta = prompt('Uma entrada inteira: ');
var resp = parseInt(resposta);

var total = 0

for (i = resp; i >= 0; i--) { 
 total = total + i; 
 console.log(i);   
  
}
console.log(`A soma é:` + total);