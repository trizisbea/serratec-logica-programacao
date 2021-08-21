var fruta = 'banana';

switch(fruta) {
    case 'abacaxi':
    console.log('Faça um chá com a casca'); 
    break;
    case 'melancia':
    case 'laranja': 
    console.log('Melancia e laranja são frutas do verão');
    break;
    default: 
    console.log('Sem informações sobre a fruta');
}

const fruta = '🍌';

switch (fruta) {
  case '🍍':
    console.log('Faça um chá com a casca.');
    break;
  case '🍉':
  case '🍊':
    console.log('Melancia e laranja são frutas do verão.');
    break;
  default:
    console.log('Sem informações sobre a fruta.');
}