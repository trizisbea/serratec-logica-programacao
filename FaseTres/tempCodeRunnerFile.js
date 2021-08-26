var prompt = require("prompt-sync")();

var genero = prompt('Digite seu gênero (F ou M) '); 
var ano = prompt('Digite seu ano de nascimento ');
var anonasc = parseInt(ano);

var mulher = genero == 'F';
var homem = genero == 'M';

var anomulher = anonasc > 2000;
var anohomem = anonasc > 2003;

var emancipada = mulher && anomulher
var emancipado = homem && anohomem