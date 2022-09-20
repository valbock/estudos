//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]); //mostra o elemento

alunos[0] = 'Eduardo'; // altera um elemento

console.log(alunos.length); //mostra a quantidade de elementos, não é o indice

// alunos[alunos.length] = 'Luiza'; //insere na ultima posição

alunos.push('Fábio'); // insere na ultima posição
alunos.push('Luana');

alunos.unshift('Luiza'); // adiciona no inicio
alunos.unshift('Fábio');

// alunos.pop(); //elimina o ultimo elemento (Luana)
let removeFim = alunos.pop(); //elimina o ultimo elemento e salva em uma variavel
const removeInicio = alunos.shift(); //elimina o ultimo elemento e salva em uma variavel

// delete alunos[1]; //limpa o elemento, mas não exclui o indice
console.log(alunos[1]); //elemento indefinido
console.log(alunos[50]); //elemento indefinido



console.log(alunos);
console.log(`usuário removido do final: ${removeFim}`);
console.log(`usuário removido do início: ${removeInicio}`);

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -2));
console.log(typeof(alunos));
console.log(alunos instanceof Array);
