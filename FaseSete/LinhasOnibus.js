/* As linhas de ônibus da capital são identificadas por números. A empresa "Pão de Açúcar" opera 8 linhas.
O passageiro irá digitar o número do ônibus que está vindo e o programa mostra o nome da linha/trajeto. */ 

const prompt = require('prompt-sync')(); 

var linhas = [8]; 

linhas [1] = '1: A X C';
linhas [2] = '2: T X J';
linhas [3] = '3: K X L';
linhas [4] = '4: P X D';
linhas [5] = '5: I X H';
linhas [6] = '6: Ç X U';
linhas [7] = '7: G X S';
linhas [8] = '9: W X I';

var numero = prompt('Qual o número do ônibus? ');

var onibus = parseInt(numero); 

linhas = linhas[onibus]

console.log('A linha do seu ônibus é ' + linhas);