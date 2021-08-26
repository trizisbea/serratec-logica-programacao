/* # Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Arquivo: signos.js
● Data: 22/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade. */ 

var prompt = require("prompt-sync")();

console.log("Descrição de signo e personalidade");

var nome = prompt("Nome: ");
var minfo = parseInt(prompt(nome + ". Qual é o mês do seu nascimento? (informe de forma númerica): "));
do{
var infodia = parseInt(prompt(nome + ". Qual é o dia do seu nascimento? "));
}while(infodia <= 0)

var janeiro = "Capricornio";
var fevereiro = "Aquario";
var marco = "Peixes";
var abril = "Aries";
var maio = "Touro"
var junho = "Gemeos";
var julho = "Cancer";
var agosto = "Leao";
var setembro = "Virgem";
var outubro = "Libra";
var novembro = "Escorpiao";
var dezembro = "Sagitario";

var ano = 12;

while(minfo <= ano){

    if(minfo == 1 && infodia <= 19) {
        console.log("Seu signo e " + janeiro);
        console.log("Shura de capricórnio é o seu mestre.")
        break;
    }

    else if(minfo == 2 && infodia <= 18) {
        console.log("Seu signo e " + fevereiro);
        console.log("Camus de áquario é o seu mestre. ")
        break;
    }

    else if(minfo == 3 && infodia <= 20) {
        console.log("Seu signo e " + marco);
        console.log("Afrodite de peixes é o seu mestre. ")
        break;
    }

    else if(minfo == 4 && infodia <= 19) {
        console.log("Seu signo e " + abril);
        console.log("Mu de áries é o seu mestre.")
        break;
    }

    else if(minfo == 5 && infodia <= 20) {
        console.log("Seu signo e " + maio);
        console.log("Aldebaran de Touro é o seu mestre. ")
        break;
    }

    else if(minfo == 6 && infodia <= 20) {
        console.log("Seu signo e " + junho);
        console.log("Saga de gêmeos é o seu mestre. ")
        break;
    }

    else if(minfo == 7 && infodia <= 22) {
        console.log("Seu signo e " + julho);
        console.log("Máscara da morte é o seu mestre. ")
        break;
    }

    else if(minfo == 8 && infodia <= 22) {
        console.log("Seu signo e " + agosto);
        console.log("Aiolia de Leão é o seu mestre. ")
        break;
    }    

    else if(minfo == 9 && infodia <= 22) {
        console.log("Seu signo e " + setembro);
        console.log("Shaka de viré o seu mestre. ")
        break;
    }

    else if(minfo == 10 && infodia <= 22) {
        console.log("Seu signo e " + outubro);
        console.log("Dohko de libra é o seu mestre. ")
        break;
    }

    else if(minfo == 11 && infodia <= 21) {
        console.log("seu signo e " + novembro);
        console.log("Milo de Escorpião é o seu mestre. ")
        break;
    }

    else if(minfo == 12 && infodia <= 21) {
        console.log("seu signo e " + dezembro);
        console.log("Aiolos de sagitário é o seu mestre. ")
        break;
    } 
}

let frases = ["bonito", "feio", "alto", "baixo", "gordo", "magro", "inteligente", "burro", "esperto"]
    let ranfrases = Math.random()*8
    let rounfrases = Math.round(ranfrases)
    console.log("Sua caracteristica é: ", frases[rounfrases])