/* A Lanchonete Java'S solicitou ao Squad DevAneios um algoritimo que apresentasse ao seu cliente um cardápio com a lista de lanches e preços para sua escolha e ao final do seu pedido lhe fosse gerada a conta com a mensagem "Favor dirija-se ao caixa".
Cardápio:
Lanches - Brioche R$ 5.75  2 - Coxinha R$ 3.55  3 - Kibe R$ 4.60 4 - Sanduiche natural R$ 6.80
Bebidas:\n Refrigerante Lata R$ 6.99 2 - Água mineral R$ 2.99 3 - Refresco R$ 4.99  4 - Suco Natural R$ 7.99");*/


var prompt = require("prompt-sync")()

console.log("Cardápio da Lanchonete Java's");
console.log("Lanches:\n 1 - Brioche R$ 5.75 \n 2 - Coxinha R$ 3.55 \n 3 - Kibe R$ 4.60 \n 4 - Sanduiche natural R$ 6.80");
var lanche = prompt("Número do lanche:  ");
console.log("Bebidas:\n 1 - Refrigerante Lata R$ 6.99\n 2 - Água mineral R$ 2.99\n 3 - Refresco R$ 4.99 \n 4 - Suco Natural R$ 7.99");
var bebida = prompt("Número da bebida: ");


switch(lanche){

case "1":
        conta = 5.75;
        break;

case "2":
        conta = 3.55;
        break;
case "3":
        conta = 4.60;
        break;
case "4":
        conta = 6.80;
        break;
default: 
        conta = 0
        console.log ("Solicitação de lanche indisponível");
}

switch(bebida){
case "1":
        conta = conta + 6.99;
        break;
case "2":
        conta = conta + 2.99;
        break;
case "3":
        conta = conta + 4.99;
        break;
case "4":
        conta = conta + 7.99;
        break;

default: 
     console.log ("Solicitação de bebida indisponível");
}
console.log("Total: " + conta); 
console.log('Favor dirija-se ao caixa');