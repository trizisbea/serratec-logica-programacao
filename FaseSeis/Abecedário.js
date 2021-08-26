/* O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero. */

const prompt = require('prompt-sync')(); 

console.log ('Vamos aprender o abecedário!')

do{ 
   var abc = console.log("Abecedário da Xuxa, vamos aprender!"); 
   resposta = prompt('Gostaria de ouvir novamente? Digite 0 caso não');
   
} while (resposta != '0');
