// Closures

function retornaFuncao(nome) {
  return function () {
    return nome;
  }
}

const funcao = retornaFuncao('Luiz');
console.log(funcao);
console.log(funcao());

const funcao2 = retornaFuncao('José');
console.log(funcao2);
console.log(funcao2());
