// Valor por referencia
//                 0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);
// //novo, server para string, Objetos, Funções, Numeros


