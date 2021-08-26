/* A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false
*/ 

const prompt = require("prompt-sync")();

var paciente = prompt("Nome do paciente: ");
var vacinado = prompt("Já foi vacinado? Digite 'ok' ");

var confirmacao = (vacinado == 'ok')

console.log('Paciente: ' + paciente);
console.log('Já vacinado: ' + vacinado);
console.log('[Triagem]');
console.log('Sujeito a infecção? ' + confirmacao);