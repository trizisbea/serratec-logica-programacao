//**Moro na capital**

//O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.

const prompt = require("prompt-sync")();

var siglaUF = prompt('Insira a sigla UF do seu estado '); 

var nomeCompleto = ''

switch (siglaUF) { 
case 'RJ': 
case 'rj': nomeCompleto = 'Rio de Janeiro'; break; 
case 'MG': 
case 'mg': nomeCompleto = 'Minas Gerais'; break;   
case 'SP':   
case 'sp': nomeCompleto = 'Sâo Paulo'; break;  
case 'ES':  
case 'es': nomeCompleto = 'Espírito Santo'; break;  
case 'AM': nomeCompleto = 'Amazonas'; break; 
case 'AP': nomeCompleto = 'Amapá'; break; 
case 'BA': nomeCompleto = 'Bahia'; break; 
default: nomeCompleto = 'Outros Estados';
}

console.log('O nome completo do seu estado é ' + nomeCompleto);