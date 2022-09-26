// // passando arguments sem o argumento na função.
// // somente nas funções declaradas com function, arrow funcions não funciona.
// // a variavel arguments recebe todos os argumentos passados na chamada da função.
// // mesmo passando paramentos.
// function funcao(a, b, c) {
//   console.log('Oi!');
//   console.log(arguments);
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao(a,b) {
//   a = a || 0;   // modo antigo de resolver.
//   b = b || 0;   //b é igual a b ou se b não tiver valor recebe 0);
//   console.log(a + b);
// }
// funcao(0,1);

// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }
// funcao(2,undefined,10);

// function funcao({nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }

// // funcao({nome: 'José', sobrenome: 'da Silva', idade:30});
// // ou...
// let obj = {nome: 'José', sobrenome: 'da Silva', idade:30};
// funcao(obj);

// function conta(operador, acumulador, ...numeros){
//   for (let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '/') acumulador /= numero;
//     if (operador === '*') acumulador *= numero;
//   }
//   console.log(acumulador);
// }

// conta('*', 10, 1,2,3,4);

// Rest parameters ...
const conta = (...args) => { console.log(args);};

conta('*', 10, 1,2,3,4);