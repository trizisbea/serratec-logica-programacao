//Exercício Digestivo
//O shopping decidiu colocar na entradas dos sanitários um indicador luminoso de capacidade, antes de entrar a pessoa deve responder se o indicador está verde ou vermelho
//Caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar

var prompt = require("prompt-sync")();

var verdeouvermelho = prompt('A luz está vermelha ou verde? '); 

var resposta = verdeouvermelho == 'verde'

if(resposta)
console.log('Pode entrar!');



//Correção

var cor = 'verde'; 

var liberado = (cor != 'vermelho'); 

var saida = '';

if (liberado)
saida = 'Sanitário liberado. Pode entrar!';

console.log(saida);


//usando if e else 

var cor = 'vermelho'; 

var liberado = (cor != 'vermelho'); 

var saida = '';

if (liberado)
saida = 'Sanitário liberado. Pode entrar!'
else 
saida = 'Aguarde um instante'

console.log(saida);
