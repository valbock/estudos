const numero = 10;

//Se houver duas condições verdadeira, será apresentado a primeira
if (numero >=0 && numero <= 5) {
  console.log('Numero entre 0 e 5');
}else if (numero >=6 && numero <= 8) {
  console.log('Numero entre 6 e 8');
}else if (numero <= 10){
  console.log('O numero é menor ou igual a 10.'); //1ª true
}else if (numero >=9 && numero <= 11) {
  console.log('Numero entre 9 e 11'); // 2ª true
}else{
  console.log('Numero não esta entre 0 e 11');
}

console.log('Segue o código...')
