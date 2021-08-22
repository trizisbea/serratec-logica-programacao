/* Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False */ 

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