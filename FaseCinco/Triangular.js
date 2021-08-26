/* O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno. */

const prompt = require("prompt-sync")();

var ladoum = prompt("Informe o valor de um dos lados: ");
var ladodois = prompt("Informe o valor de um dos lados: ");
var ladotres = prompt("Informe o valor de um dos lados: ");

var lado1 = parseFloat(ladoum);
var lado2 = parseFloat(ladodois);
var lado3 = parseFloat(ladotres);

if ((lado1 == lado2) && (lado2 == lado3)){
    console.log("O triangulo é equilátero")
}

if ((lado1 != lado2) && (lado2 != lado3)){
    console.log("O triangulo é escaleno")
}

else{
    console.log("O triangulo é isósceles")
}




/* if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
 console.log('Esse é um triângulo equilátero');    
};

if ((lado1 = lado2) || (lado1 != lado3) || (lado2 != lado3)){
console.log('Esse é um triângulo escaleno')};

 else 
console.log('Esse é um triângulo isósceles'); */