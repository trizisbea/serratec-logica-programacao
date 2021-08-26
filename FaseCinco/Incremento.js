//Incremento 

var numero = 1; 
var resposta = numero++; 

console.log(resposta); 

var outro = numero + 1; 
console.log(outro); 

//Decremento

var numero = 1; 
numero--;
console.log(numero);

//Exemplo 
var num = 0; 
var resposta = num++;
console.log('ultimo numero ' + resposta);
console.log('numero incrementado ' + num);

// ++numero - incremento antes do retorno || numero++ - incremento depois do retorno

var num = 0; 
var resposta = num++;
console.log('ultimo numero ' + resposta);
console.log('numero incrementado ' + num);

var num = 0; 
var resposta = ++num;
console.log('ultimo numero ' + resposta);
console.log('numero incrementado ' + num);

//soma abreviada 

var num = 0; 
num = num + 3;

//ou - atribuição de soma (ou subtração)

var num = 0 ;
num += 3;

// 

var num = 0;
num -= 4;
console.log(num);

//também serve pra string 

var texto = 'Olá, '; 
texto = texto + 'Zépa';

texto += 'Zépa';