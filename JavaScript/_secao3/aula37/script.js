const nomes = ['josé', 'maria', 'pedro'];

//forEach
nomes.forEach(function(valor, indice){ //odem correta
  console.log(indice, valor); //se quiser, ordem invertida
})



// //for of não usa o indice e sim o valor // não funciona com chaves de objetos somente com Array
// for (valor of nomes){
//   console.log(valor);
// }

// // for in usando o indice pode ser usado em objetos
// for (i in nomes){
//   console.log(i, nomes[i])
// }

// //modo tradicional
// for (i = 0; i < nomes.length; i++){
//   console.log(nomes[i]);
// }