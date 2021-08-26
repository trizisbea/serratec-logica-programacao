/* O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.
1 ^ 2 = 1
2 ^ 2 = 4
… */ 

console.log('Quadrados: ')

for(var numero = 1; numero <= 9, numero++)  {

var quadrado = numero * numero;

var resposta = numero + ' ^ 2 = ' + quadrado;
console.log(resposta);
} 

console.log('fim dos quadrados');

