/* Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida (2).
Componentes: Carolina Tardin, Carlos Alberto Rodrigues, Diego Faria, Gilnei Lima, Leandro Fita, Marcella Alzuguir
Autor da proposta: Leandro Fita
Data: 21/08/2021

Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
•    R$ 1,99
•    R$ 3,50
•    R$3,99
•    R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$5,00
•    R$10,00
•    R$20,00 */

const prompt = require("prompt-sync")()

//Cardápio
var refri1 = 'Fanta';
var refri2 = 'Coca-cola';
var refri3 = 'Pepsi';
var refri4 = 'Mil';

var preco1 = 3.50;
var preco2 = 6.00;
var preco3 = 3.99;
var preco4 = 1.99;

var valor_do_produto;

//Pagamento
var form1 = 2.00;
var form2 = 5.00;
var form3 = 10.00;
var form4 = 20.00;

var forma_de_pag;

//ENTRADA
console.log("DIGITE O NÚMERO REFERENTE A BEBIDA QUE VOCÊ QUISER!");
console.log(`Opções de bebidas:\n(1)${refri1} - R$${preco1}\n(2)${refri2} - R$${preco2}\n(3)${refri3} - R$${preco3}\n(4)${refri4} - R$${preco4} `);
console.log("!=========================!");
console.log("!=========DIGITAR OUTRA COISA SERÁ DESCONSIDERADA=======!");

//PROCESSAMENTO
do{

    var escolha = prompt("!=============QUAL SERÁ A BEBIDA============!", );
    var bebida_num_escolha = parseInt(escolha);

    //ESCOLHA DAS BEBIDAS ATRAVÉS DOS COD
    switch(bebida_num_escolha){
        case 1:
            console.log(`${refri1} - R$${preco1}`);
            valor_do_produto = preco1
            break;
        case 2:
            console.log(`${refri2} - R$${preco2}`);
            valor_do_produto = preco2
            break;
        case 3:
            console.log(`${refri3} - R$${preco3}`);
            valor_do_produto = preco3
            break;
        case 4:
            console.log(`${refri4} - R$${preco4}`);
            valor_do_produto = preco4
            break;
        default:
            console.log(`Não identificamos o código!`);
            break;
    }

    console.log(`Opções de pagamento:\n(1)${form1} Reais\n(2)${form2} Reais\n(3)${form3} Reais\n(4)${form4} Reais`)
    //ESCOLHA DO PAGAMENTO ATRAVES DIGITAÇÃO

    var pergunta_pag = prompt("!=============QUAL SERÁ A FORMA DE PAGAMENTO============!", );
    var metodo_de_pagamento = parseInt(pergunta_pag);

    switch(metodo_de_pagamento){
        case 1:
            console.log(`Pagamento com nota de ${form1} Reais`);
            forma_de_pag = form1
            break;
        case 2:
            console.log(`Pagamento com nota de ${form2} Reais`);
            forma_de_pag = form2
            break;
        case 3:
            console.log(`Pagamento com nota de ${form3} Reais`);
            forma_de_pag = form3
            break;
        case 4:
            console.log(`Pagamento com nota de ${form4} Reais`);
            forma_de_pag = form4
            break;
        default:
            console.log(`Não identificamos a forma de pagamento!`);
            break;
    }

    if(forma_de_pag < valor_do_produto){
        console.log(`Forma de pagamento invalida!, Repita o precesso!`);
    }
    else{
        console.log(`Compra realizada com sucesso! Gerando troco caso necessario!`)
    }

    var conta_final = forma_de_pag - valor_do_produto;

    if(conta_final > 0){
        console.log(`Seu troco é de: ${conta_final} Reais`)
    }
}while(conta_final <= 0);