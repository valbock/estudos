// Declaração de função (function hoisting)
// a função é elevada e pode ser chamada em qualquer 
// local do código.

falaOi();

function falaOi() {
  console.log('Oi!')
}

// First-class objects (Objetos de primeira classe)
// Function expression , uma variavel ou constante 
// pode receber uma função.
const souUmaFuncao = function() {
  console.log('Sou uma função');
};

function executaFuncao(funcao) {
  funcao()
}

executaFuncao(souUmaFuncao);

// Arrow funcion
const funcaoArrow = () => {
  console.log('Arrow');
};

funcaoArrow();

//Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando');
  }
}

obj.falar()