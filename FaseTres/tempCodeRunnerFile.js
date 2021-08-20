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