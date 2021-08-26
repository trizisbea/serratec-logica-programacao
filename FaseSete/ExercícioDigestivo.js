/* Exercício digestivo - chamda da classe
Com base nos vetores de alunos e presença: 
1. Quantidade de alunos;
2. Posição do aluno 'Beatriz'; 
3. Total de presentes; 
4. Total de ausentes; */  

const prompt = require('prompt-sync')(); 

var aluno = []; 

aluno[0] = 'Adrian';
aluno[1] = 'Andre Luis';
aluno[2] = 'Andre Pontes';
aluno[3] = 'Antonio';
aluno[4] = 'Arthur';
aluno[5] = 'Beatriz';
aluno[6] = 'Bruno';
aluno[7] = 'Carlos';
aluno[8] = 'Carol';
aluno[9] = 'Daniel';
aluno[10] = 'Diego';
aluno[11] = 'Eduardo';
aluno[12] = 'Gilnei';
aluno[13] = 'Guilherme';
aluno[14] = 'Gustavo';
aluno[15] = 'Gustavo Ponte';


var presenca = []; 

presenca[0] = true; 
presenca[1] = true;
presenca[2] = true;
presenca[3] = false; 
presenca[4] = false;
presenca[5] = true;
presenca[6] = true; 
presenca[7] = false;
presenca[8] = true;
presenca[9] = true; 
presenca[10] = true;
presenca[11] = true;
presenca[12] = true; 
presenca[13] = true;
presenca[14] = true;
presenca[15] = true; 

var qtde = aluno.length;
console.log('A quantidade de alunos é ' + qtde);

// Posição do aluno 'Beatriz'

var nome = 'Beatriz'; 
var cadeira = -1; // é um valor inteiro

for (var i = 0; i < qtde; i++) {

    if (aluno[i] == nome) {
        cadeira = i 
        break; 
    }
}

if(cadeira == -1) { //qualquer valor menor que -1, quer dizer que eu encontrei o aluno 
    console.log('Não encontrei o aluno' + nome +'na listagem');
} 
else { 
    console.log('O aluno ' + nome +' está na cadeira ' + cadeira);
}

// Total de presentes
 
var total = 0
var ausentes = 0
for (var i = 0; i < presenca.length; i++) {

if(presenca[i]) {
total++; 
} 
else 
ausentes++ 
}

console.log('O total de presentes é ' + total);
console.log('O total de ausentes é ' + ausentes);

//Nome dos ausentes

var ausentes = []; 

for (let i = 0; i < aluno.length; i++) {
    const ausente = ! presenca[i];
   if(ausente) {
       nome = aluno[i];
       ausentes.push(nome);
   }  
}

console.log('Os nomes dos ausentes abaixo: ');
console.log(ausentes); 

var total = 0;

for (var i = 0; i < presenca.length; i++) {
  
  var presente = (presenca[i] == true);

  
  if (presente) {
    total = total + 1;
  }
}

console.log("O total de presentes é " + total);

var ausentes = [];

for (let i = 0; i < aluno.length; i++) {
 
  const ausente = ! presenca[i];
 

  //critério de busca
  if (ausente) {
    nome = aluno[i];
    //ausentes.push(nome);
    ausentes[i] = nome;
  }
}

console.log("Os nomes dos ausentes abaixo:");
console.log(ausentes);



