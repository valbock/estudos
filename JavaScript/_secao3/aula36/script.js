// for in lê os indices de [] e {}

const pessoa = {
  nome: 'José',
  sobrenome:'Silva',
  idade: 45,
  endereço: {
    rua: 'um',
    numero: 2
  }
}

for (chave in pessoa){
  console.log(chave, pessoa[chave]);
}


// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (indice in frutas){
//   console.log(frutas[indice]);
// }

// for (i = 0; i < frutas.length; i++){
//   console.log(frutas[i]);
// }