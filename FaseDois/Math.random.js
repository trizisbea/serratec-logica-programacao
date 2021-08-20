var aleatorio = Math.random(); 
console.log(aleatorio);

var aleatorio = Math.random() + 2; 
console.log(aleatorio);

var numero = Math.trunc(12.25);
console.log(numero);

var magico = Math.random();
console.log(magico);
magico = Math.trunc();

var numero = Math.floor(25.964292);
console.log(numero);

var numero = Math.round (8.56);
console.log(numero);


// Estudar a função Math.random();

//console.log(Math.random());
// Gera números aleatórios entre 0 (inclusivo) 1 (exclusivo).
// Números gerados com 16 casas decimais;
// Ex.: Jogos e sorteios.

//console.log(Math.random() * 2);
// Gera números aleatórios entre 0 e 2

//var aleatorio = Math.floor(Math.random() * 4);
//console.log(aleatorio);
// Variável aleatorio recebe numero entre 0 e 4
// Math.floor função que arredonda o número decimal para inteiro e arredonda para baixo

//var aleatorio = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
//console.log(aleatorio);
// Antes de executar a multiplicação, é executada a expressão entre parenteses
// (4 - 0 + 1) gera os valores entre 0 e 4.999999...
// 4 é o valor máximo que vai ser gerado
// - 0 número mínimo a ser gerado
// + 1 leva o resultado aritmético máximo a 5, pois o número aleatório para 5 é exclusivo
// + 0 valor mínimo que o número aleatório deve ter