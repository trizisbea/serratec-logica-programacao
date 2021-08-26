/* **Moro na capital**

O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.*/ 

const prompt = require("prompt-sync")();
var sigla = prompt('Qual a UF do seu estado? ')

switch (sigla) {
case 'RJ': nomecompleto = 'Rio de Janeiro'; break;
case 'rj': nomeCompleto = 'Rio de Janeiro'; break;
case 'MG': nomeCompleto = 'Minas Gerais'; break;
case 'mg': nomeCompleto = 'Minas Gerais'; break; 
default: nomeCompleto = 'Outros';
} 


console.log('O nome do seu Estado é' + nomeCompleto);