// Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.

var videogame = 1545;
var jogo = 345;
var pagamento  = videogame + jogo;

var tresvezes = 1890 / 3 
var cincovezes = 1890 / 5
var dezvezes = (1890 * 0.015) + 1890 / 10  

console.log('Em 3 vezes a parcela sai por ' + tresvezes + ', em 5 vezes a parcela sai por ' + cincovezes + ', em 10 vezes com juros de 1.5% a parcela sai por ' +  dezvezes);




