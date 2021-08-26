/*# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves
● Squad de Origem (Requisito): DSD - Dragon Slayer Developers (Squad 5)
● Arquivo: limparCasa.js
● Data: 22/08/2021

 ## Descrição:
Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para cada cômodo que for da sua escolha. */ 

/*# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves
● Squad de Origem (Requisito): DSD - Dragon Slayer Developers (Squad 5)
● Arquivo: limparCasa.js
● Data: 22/08/2021

 ## Descrição:
Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para cada cômodo que for da sua escolha. */ 

const prompt = require('prompt-sync')();

console.log('Que tal limpar a casa hoje?')

do {
    var sala = prompt('Você limpou a sala na última semana? Digite S ou N ');
} while ((sala != 'S') && (sala != 'N')) 

do {
  var cozinha= prompt('Você limpou a cozinha nos últimos três dias? Digite S ou N ');
} while ((cozinha != 'S') && (cozinha != 'N')) 

do {
    var banheiro = prompt('Você limpou o banheiro nos últimos três dias? Digite S ou N ');
  } while ((banheiro != 'S') && (banheiro != 'N')) 

do{
var quarto = prompt('Você limpou o quarto na última semana? Digite S ou N ');
} while ((quarto != 'S') && (quarto != 'N')) 

if(sala == "N")
console.log('É necessário limpar a sala');
else
console.log('Não é necessário limpar a sala'); 

if(cozinha == "N")
console.log('É necessário limpar a cozinha');
else
console.log('Não é necessário limpar a cozinha'); 

if(banheiro == "N")
console.log('É necessário limpar a sala');
else
console.log('Não é necessário limpar o banheiro'); 

if(quarto == "N")
console.log('É necessário limpar o quarto');
else
console.log('Não é necessário limpar o quarto');

