// Estudo de switch 

var numero = 23;
var resposta = '';

switch(numero) {
case 1: resposta = 'um'; break;
case 2: resposta = 'dois'; break; 
case 3: resposta = 'três'; break; 
case 4:
case 5: 
case 6: resposta = 'muitos'; break;
default: resposta = 'muitos mesmo'; 
}

console.log(resposta); 