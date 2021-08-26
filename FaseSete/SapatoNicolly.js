sapato = []; 

sapato[0] = 'pantufa'; 
sapato[1] = 'chinelo';
sapato[2] = 'salto alto'; 
sapato[3] = 'tênis'; 
sapato[4] = 'rasteirinha';

var pesquisa = 'salto alto'; 
var encontrei = 0;

for (var i = 0; i < sapato.length; i++) {
    console.log(i, sapato[i]);
  
    if (sapato[i] == pesquisa) {
      ultimo = i;
      listaEncontrados[qtdeEncontrados] = i;
      qtdeEncontrados++;
      //break;
    }
  }
  
  console.log("Encontrei " + qtdeEncontrados + " " + pesquisa);
  console.log(listaEncontrados);
  
  if (ultimo > -1) {
    console.log("O último sapato está na gaveta " + ultimo);
  } else {
    console.log("Não encontrado");
  }