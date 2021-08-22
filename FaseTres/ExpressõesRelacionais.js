/*Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
a. x - y M a
b. x - y * a M c mod y
c. y <> c
d. x * y <> c
e. c mod y mi y mod c
f. a m b
g. z / a + x * y - 5 MI b
h. c * z + 2 ig a * x + y
i. c ig z + b
j. y * 2 <> 7 - b*/ 

var x = 6.0; 
var y = 2; 
var z = 4.000; 
var a = 8; 
var b =  7.5;
var c = 12;

var A = (x - y) > a;
console.log(A);

var B = (x - y * a) > (c % y); 
console.log(B); 

var C =  y != c
console.log(C);

var D =  x * y != c
console.log(D); 

var E = (c % y) <= (y % c)
console.log(E);

var F = a < b
console.log(F); 

var G = (z / a) + (x * y - 5) >= b; 
console.log(G);

var H = (c * z + 2) == (a * x + y); 
console.log(H);

var I = c == (z + b);
console.log(I);

var J = (y * 2) != (7 - b)
console.log(J); 


