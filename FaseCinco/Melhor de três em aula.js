/*
**Melhor de três**
O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

const prompt = require("prompt-sync")();

const respOficial = "digitacao";

for (var i = 0; i < 3; i++) {
  console.log("Alô ouvinte " + (i + 1));
  //contadora, decremento
  var chances = 2;

  do {
    var resposta = prompt("Qual a sua resposta da pergunta ao vivo? ");
    var acertou = resposta == respOficial;

    if (acertou) {
      console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
    } else {
      chances--;
      console.log("Você errou! ", chances);
    }

  } while (!acertou && (chances > 0));
}

console.log("90FM é show!");

// Estudo de repetição - laço for (repetição definida)

//for (i = inicialização; i <>= quanto o código deve se repetir; i como variável se comporta a cada repetição)

//contagem de 1 a 10 

for (i = 1; i <= 10; i++) {
  console.log(i);
}

//impressão da tabuada de um número 

var num = 2;

for(i = 1; i < 10; i++) {
  var mult = console.log(num * i);
}

var t = prompt('ola'); 