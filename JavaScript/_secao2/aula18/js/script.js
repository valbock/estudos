//Objetos
// const pessoa1 = {
//   nome: 'Valtenir',
//   sobrenome: 'Bockhorny',
//   idade: 57
// };

// const pessoa2 = {
//   nome: 'Marta',
//   sobrenome: 'Bockhorny',
//   idade: 57
// };

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);
////

//Usando função
// function criaPessoa (nome, sobrenome, idade){
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
//   };
// }

//Abreviando
// function criaPessoa (nome, sobrenome, idade){
//   return {nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Valtenir', 'Bockhorny', 57);
// const pessoa2 = criaPessoa('Marta', 'Bockhorny', 57);

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// Objetos com metodos
const pessoa1 = {
  nome: 'Valtenir',
  sobrenome: 'Bockhorny',
  idade: 57,
  fala() {  // metodo fala
    console.log(`A minha idade é ${this.idade}`);
  },
  incrementaIdade() { //metodo incrementa a indade
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
