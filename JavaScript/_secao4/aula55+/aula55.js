// // IIFE -> Immediately invoked funcion expression
// // Funções imediatas.

// (function () {
//   const nome = 'Um nome';
//   console.log(nome);
// })();

// (function (a, b) {
//   console.log(a + b);
// })(2, 2);

(function (idade, peso, altura) {
  const sobrenome = 'Souza';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Pedro'));
  }
  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.75);