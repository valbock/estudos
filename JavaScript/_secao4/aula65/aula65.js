// filter, map, reduce 

//Retorne os numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, arrays) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // simplificado
// function callbackFilter(valor) {
//   return valor > 10;
// }

// const maioresDez = numeros.filter(function(valor) {return valor > 10;});
// const maioresDez = numeros.filter(valor => valor > 50);

// console.log(maioresDez)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termine com a
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasIdadeMaior = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdadeMaior);
const pessoasTermionaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasTermionaA);