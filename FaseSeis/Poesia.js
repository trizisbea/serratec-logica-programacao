/* No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.*/ 

const prompt = require('prompt-sync')(); 

console.log('Leia esse trecho de poesia: '); 
const poesia = 'Tudo vale a pena se a alma não é pequena'
console.log(poesia); 

do{
console.log('Tudo vale a pena se a alma não é pequena');
resposta = prompt('Gostaria de ler novamente? Digite S ou N');
} while(resposta == 'S')


//outra opção 

const prompt = require('prompt-sync')(); 

var resposta = prompt('Gostaria de ler uma poesia? '); 

while (resposta == 'S') {
var poesia = console.log('Tudo vale a pena se a alma não é pequena');
resposta = prompt('Gostaria de ler novamente?');
}
console.log('fim');
