/* Delivery de comida japonesa iniciando suas atividades precisa contratar motoboy e, como tem uma certa urgência na contratação, não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga, o objetivo é fazer uma pré-seleção e permitir que somente os canditados que cumpram tais requisitos enviem seu currículo para o RH. Possui CNH A? CNH na validade? Experiência na área? 
Todas respostas têm que ser verdadeiras  para o candidato estar apto a se candidatar. */

const prompt = require("prompt-sync")();

console.log('Responda as perguntas abaixo:')
 
var tipoCarteira = prompt('Possui CNH A? Digite S ou N. ');
var validade = prompt('Sua CNH está na validade? Digite S ou N. ');
var experiencia = prompt('Tem experiência em sua área? Digite S ou N. ');

if (tipoCarteira == 'S' && validade == 'S' && experiencia == 'S') {
    console.log('Parabéns, seu currículo está de acordo com nossas exigências. Aguarde a chamada de sua entrevista.');
}
else 
console.log('Infelizmente seu currículo não está de acordo com nossas exigências.');

