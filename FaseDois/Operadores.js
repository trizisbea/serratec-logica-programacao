// Lógicos

// Boolean 

//Conjunção 
var maria = false; 
var carol = true;

var estaoPresentes = maria && carol; 
console.log('Os alunos estão presentes?', estaoPresentes);

//Disjunção 
var serverProgradragão = true; 
var serverGuerrilha = true; 

var entrar = serverProgradragão || serverGuerrilha;
console.log('estou conectado no discord?', entrar);

//Negação 
var prof = true; 
var serverGalera = ! prof; 

console.log('Posso entrar no server da galera?', serverGalera); 
