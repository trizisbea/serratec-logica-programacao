// Limitação da loja

const limite = 8; 
var qtde = 8; 
var liberado = (qtde < limite);

if (liberado)
console.log('Permitida a entrada');
else
console.log('Não permita a entrada');

// 
const limite = 8; 
var qtde = 8; 
var liberado = (qtde < limite);

var resolução = ''

if (liberado)
resolução = console.log('Permitida a entrada');
else
resolução = console.log('Não permita a entrada');


//outro exemplo
const limite = 8; 
var qtde = 9; 

var liberado = (qtde < limite);
var proximo = (qtde == 7);

if (liberado)
    if(proximo) 
    console.log("Pode entrar, mas não acompanhado");

    else 
    console.log('Entrada liberada');
else
console.log('Aguarde um pouco');



