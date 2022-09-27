// Valor por referencia
//                 0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);

// console.log(nomes.length);

// const removido = nomes.pop(); //remove do final
// const removido = nomes.shift(); //remove no inicio
// console.log(nomes, removido);

// nomes.push('João');
// nomes.push('Wallace'); //acrescenta no final

// nomes.unshift('João');
// nomes.unshift('Wallace'); //acresscenta no inicio.

// console.log(nomes);
// //                0          1       2         3           4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', "Rosana"];
// const novo = nomes.slice(1, 4); // não inclui a ultima referência.
// const novo = nomes.slice(1, -2); // exclui as ultimas referencias 

// console.log(novo);

// const nome = 'José da Silva Moreira';
// const nomes = nome.split(' '); //String em Array
// console.log(nomes);

const nomes = [ 'José', 'da', 'Silva', 'Moreira' ];
const nome = nomes.join(' '); // Array em String
console.log(nome);
