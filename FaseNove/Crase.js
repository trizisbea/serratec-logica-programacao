//Crase 

let texto = 'texto puro'; 
texto = 'Aspas simples'; 
let TextoJs = `no proprio editor
eu quebro 
linha`
console.log(TextoJs);

//Caractere de escape 
texto = 'O que é texto com \' no meio'; 
console.log(texto); 

texto1 = 'Quebra\nde linha se quiser um tab\t espaço maior';
console.log(texto1); 

let saudacao = 'Bom dia'; 

//Notação template strings ou strings literals ${variável}
texto2 = `Querido Aluno Braya: ${saudacao} !`
console.log(texto2); 

texto3 = `A resposta de 2 + 2 é igual a ${2 + 2}!!`; 
console.log(texto3);
