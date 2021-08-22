/*Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False*/

var prompt = require("prompt-sync")();

var temp = prompt('Digite a temperatura: '); 
var máscara = prompt('Usa máscara (S ou N): '); 

var entrada1 = temp < 36.5; 
var entrada2 = máscara != 'N';

var final = entrada1 && entrada2

console.log('Autorizar a entrada? ' + final);







