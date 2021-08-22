//O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos.

var apostaGuilherme = 2;
var apostaHigor = 5;
var apostaViviane = 10;
var apostaRodrigo = 8;
var apostaLuciana = 7;

var expressão = (apostaGuilherme + apostaViviane + apostaRodrigo) - (apostaHigor - apostaLuciana);

console.log(expressão);