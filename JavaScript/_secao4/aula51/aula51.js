// Return - Retorna valores da função
// Termina a função.

// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(1, 2));

// function soma1(a, b) {
//   console.log(1 + 2);
// }
// soma1(1, 2);

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = criaPessoa('José', 'Souza');
// console.log(p1);

// console.log('##################')

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto;
//   }
//   return falaResto;
// }

// const fala = falaFrase('ola');
// const resto = fala('mundo!');
// console.log(resto);


// //criado de funções de multiplicador
function criaMultiplicador(multiplicador){
  return function(n) {
    return n * multiplicador;
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(4));
console.log(triplica(4));
console.log(quadriplica(4));
