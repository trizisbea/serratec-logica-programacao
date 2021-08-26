/* O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console. */


var prompt = require("prompt-sync")();  
console.log("==============================="); 
console.log("CARA OU COROA"); 
console.log("==============================="); 

do {     
    var resp = prompt("Você escolhe cara ou coroa? ");     
console.log("A sua resposta foi: ", resp); 
 } while (resp != "cara");