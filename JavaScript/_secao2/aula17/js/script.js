//Funções

// function saudacao(nome) {
//   return `Boa tarde ${nome}`;
// }

// // console.log((saudacao('Valter')))

// let resposta = saudacao('Valter');
// console.log(resposta);
// resposta = saudacao('Maria');
// console.log(resposta);
////

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(5,7));
// console.log(soma(3,2));
// console.log(soma(15,17));
////

// function soma(x=0, y=0){  //caso não envie o valor, não recebe NaN
//   const resultado = x + y;
//   return resultado;
// }
// console.log(soma()); //resultado 0
////

//Função anônima, sem nome na função e sim uma variavel
// const raiz = function(n) {
//   return n ** (1/2);
// };   // necessário ponto e virgula

// console.log(raiz(100));  //usa-se a variavel como função
// console.log(raiz(9));
//

// arrow funcion, função modernas
// const raiz = (n) => {
//   return n ** (1/2);
// };
// console.log(raiz(9));
////

//Quando é simples da para abreviar.
const raiz = n => n ** (1/2);
console.log(raiz(19));

////