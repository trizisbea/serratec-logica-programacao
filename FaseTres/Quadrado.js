/*Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado. (JÁ FEITO! - CalculoDobro.js)
O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.*/

var prompt = require("prompt-sync")();

var numero = prompt('Digite um número '); 

var resultado = Math.pow(numero, 2); 

console.log('O quadrado de ' + numero +' foi ' + resultado);

