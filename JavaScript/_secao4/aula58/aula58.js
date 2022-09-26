// função construtora - controi objetos. 
// função fabrica - fabrica objetos.
//
// função construtora inicia com letra Maiúscula.
// ex. Pessoa (new)
//  Não precisa de virgula, somente o ponto e virgula normal.
//  Possui também variáveis privadas de uso interno da função,
//  ex. para calculos internos ou validações etc.

function Pessoa(nome, sobrenome) {
  const ID = 123;  // variavel interna, não disponivel externamente.

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('José', 'Oliveira');
const p2 = new Pessoa('Maria', 'Regina');

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
p1.metodo();
p2.metodo();
console.log(p1.ID); //indefinida.
