/* Pimentinhas para a virada de ano:
É possível fazer o mesmo programa sem a inversão do laço?
E se ao invés de números, a contagem fosse exibida em texto?
*/ 

console.log ('Contagem regressiva! ');
var contagem = 11; 

for (i = 10; i >= 0; i--) {
    contagem = 10 - i; 
    console.log('Faltam ' + i + ' minutos'); 
}
console.log('Feliz ano novo!');