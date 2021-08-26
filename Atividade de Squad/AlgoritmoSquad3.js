/* Squad DevAneios 


Componentes: 
Beatriz Neves Nolasco
Guilherme Ferreira Gusman
Higor Henrique Dos Santos Nascim

Luciana Gasparini Moreira Wendling
Rodrigo Calmon Nogueira Da G
Viviane Dantas Soares



Enunciado escolhido para rodízio: 


Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação. */

const prompt = require('prompt-sync')();

console.log("Bem vindo!")

//Entrada
var livro1 = prompt("Qual o nome do livro que você lerá? (ex: Harry Potter) ");
do {
var numpag1 = prompt("Qual o número de páginas o livro possui? (ex: 280) ");
}
while (numpag1 <= 0)
do {
var deadline = prompt("Quantos dias faltam para o prazo de leitura? (ex: 7) ");
}
while (deadline <= 0)

//Processamento
var conta = (numpag1 / deadline);
var contafinal = Math.ceil(conta);
console.log("Você deverá ler ao menos ", contafinal, " páginas por dia!");

//Saída
const mensagem = ("Quando você acabar a leitura do " + livro1 + ", recomendo a leitura do ");

//Recomendação abaixo de 100 páginas
if (numpag1 <=100 && livro1 != "A Revolucao dos Bichos")
    console.log(mensagem, "A Revolucao dos Bichos, Owell!");
if (numpag1 <=100 && livro1 != "O Alienista" && livro1 == "A Revolucao dos Bichos")
    console.log(mensagem, "O Alienista, Assis!");

//Recomendação entre 101 e 499 páginas
if (numpag1 < 500 && numpag1 > 100 && livro1 != "O Homem Invisivel")
    console.log(mensagem, "O Homem Invisivel, Wells");
if (numpag1 < 500 && numpag1 > 100 && livro1 != "Eu, Robo" && livro1 == "O Homem Invisivel")
    console.log(mensagem, "Eu, Robo, Asimov");

//Recomendação acima de 500 páginas
if (numpag1 >= 500 && livro1 != "Moby Dick")
    console.log(mensagem, "Moby Dick, Melville!");
if (numpag1 >= 500 && livro1 != "Duna" && livro1 == "Moby Dick")
    console.log(mensagem, "Duna, Herbert");