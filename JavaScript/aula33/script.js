const pessoa = {
  nome: 'Valtenir',
  sobrenome: 'Bockhorny',
  idade: 57,
  endereco: {
    rua: 'Inajá',
    numero: 129
  }
};

// //const nome = pessoa.nome;
// //const sobrenome = pessoa.sobrenome;
const { nome, sobrenome } = pessoa; // mais economico
console.log(nome, sobrenome);
console.log('//////');
//////
const { endereco } = pessoa;
console.log(endereco); //objeto inteiro
console.log('//////');
///
const { endereco: {rua, numero="s/n" } } = pessoa; //valor padão casonão encontrado
console.log( rua, numero);
console.log('//////');
//////
const { nome:n, sobrenome:s, idade:i, ...resto} = pessoa; 
console.log(n, s, i, resto);
console.log('//////');