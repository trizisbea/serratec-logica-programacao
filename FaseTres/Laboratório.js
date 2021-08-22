//O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.

var prompt = require("prompt-sync")();

var garrafa = prompt('Digite a capacidade da garrafa em mililitros '); 

var gel = 30/100 * garrafa
var alcool = 70/100 * garrafa

console.log(gel + ' de gel')
console.log(alcool + ' de álcool')

