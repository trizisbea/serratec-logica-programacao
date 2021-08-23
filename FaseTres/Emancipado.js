/*É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True */

const prompt = require('prompt-sync')();

var genero = prompt("Digite seu gênero: ");
var ano = prompt("Digite seu ano de nascimento: ");

var emancipado = genero == "masculino" && ano < 2004 || genero == "feminino" && ano < 2001;

console.log('Cidadão emancipado? ' + emancipado); 







