/* Calculadora de Páginas de leitura vs. Deadline (prazo final)

O algoritmo proposto deve funcionar da seguinte maneira:

Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.

Enunciado Guilherme Gusman (GG) */ 

const prompt = require('prompt-sync')();

console.log("Olá, essa é a Calculadora de Páginas de leitura vs. Deadline")

var leitura = prompt("Qual livro você está lendo? ");

do {
var pag = prompt("Quantas páginas há no livro? ");
}
while (pag <= 0);

do {
var deadline = prompt("Em quantos dias você quer ler seu livro? ");
while (pag <= 0);


var conta = (pag / deadline);
var arredondado = Math.ceil(conta);

console.log("Calculadora:" + arredondado + "páginas por dia");

const recomendacao = ("Recomendação de leitura de acordo com suas preferências:");

if (pag <= 100 && leitura != "A Revolucao dos Bichos")
    console.log(recomendacao, "A Revolucao dos Bichos");
if (pag <= 100 && leitura != "O Alienista" && leitura == "A Revolucao dos Bichos")
    console.log(recomendacao, "O Alienista!");


if (pag < 500 && pag > 100 && leitura != "O Homem Invisivel")
    console.log(recomendacao, "O Homem Invisivel");
if (pag < 500 && pag > 100 && leitura != "Eu, Robo" && leitura == "O Homem Invisivel")
    console.log(recomendacao, "Eu, Robo");


if (pag >= 500 && leitura != "Moby Dick")
    console.log(recomendacao, "Moby Dick");
if (pag >= 500 && leitura != "Duna" && leitura == "Moby Dick")
    console.log(recomendacao, "Duna");
