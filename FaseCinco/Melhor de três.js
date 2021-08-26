/* Melhor de três
O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.*/

const prompt = require("prompt-sync")();

const RESPOSTA = "digitacao";

for(i = 0; i < 3; i++){
  var chance = 0;
  var acerto;

     do{
      var resposta = prompt("Qual a sua resposta a pergunta ao vivo? ")
      acerto = resposta == "digitacao";
      chance++
    }while (chance < 2 && !acerto)

    if(acerto){
      console.log("Parabéns!")
  }
    else {console.log("Errou!")
  }
}
console.log("Acabou a promo pessoal!")