// map 

//Dobre os números
//               0  1   2   3  4 ...                      12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function(valor, indice, array) {
//   // console.log(valor, indice, array);
//   return valor*2
// })

// const numerosEmDobro = numeros.map(valor => valor*2);
// console.log(numerosEmDobro);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicone uma chave "id" em cada objeto

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

// const nomes = pessoas.map(valor => valor.nome);
// console.log(nomes);

// const idades = pessoas.map(obj => ({idade: obj.idade}));
// console.log(idades);

// // objeto original é afetado com passagem por referencia
// const comIds = pessoas.map(function(Obj, indice) {
// Obj.id = indice + 1;
// return Obj;
// });
// console.log(pessoas);
// console.log(comIds);

// copiando o objeto
const comIds = pessoas.map(function(Obj, indice) {
  const newObj = { ...Obj };
  newObj.id = indice;
  return newObj;
  });
  console.log(pessoas);
  console.log(comIds);
