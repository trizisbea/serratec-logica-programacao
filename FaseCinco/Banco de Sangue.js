/* Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
1) Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar da doação (ou parabenizar quando aprovado).
2) Assim que a primeira restrição for atendida, não serão feitas as perguntas subsequentes. */

//1

var prompt = require("prompt-sync")();

console.log('[Digite "Sim" ou "Não" nas restrições a seguir]');

var idade = prompt('Idade abaixo de 16 ou acima de 69: '); 
var peso = prompt('Pesa menos de 50kg: ');
var hepatite = prompt('Portador de hepatite: '); 
var malária = prompt('Já teve malária: ');
var doação = prompt('Fez doação recente: '); 

var id = idade != "Sim";
var pes = peso != "Sim";
var hep = hepatite != "Sim";
var mal = malária != "Sim";
var doa = doação != "Sim";

var triagem = id && pes && hep && mal && doa;

console.log('Pode doar sange? ' + triagem);

if (triagem = true) {
    console.log('Parabéns, você é apto a doar sangue');
}
else (trigem = false) {
    console.log('Infelizmente você não é apto a doar sangue');   
}
