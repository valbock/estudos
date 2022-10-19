//
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3); //elemx são adicionados

//const numeroMaximo = Number.MAX_VALUE;


// simular o pop()
// const removidos = nomes.splice(3, 2); // mesmo que o abaixo
// const removidos = nomes.splice(-2, 2); // mesmo que o acima
// const removidos = nomes.splice(-2, 1000); // pode-se usar qualquer numero final 
// const removidos = nomes.splice(-2, numeroMaximo); // numero máximo do javaScript 
//console.log(numeroMaximo);

// pop
// const removido = nomes.splice(-1, 1);
// const removido = nomes.splice(-2, Number.MAX_VALUE);

//shift
// const removido = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz'); // melhor usar o próprio push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', 'Miranda');

//unshift
nomes.splice(0, 0, 'Luiz', 'Miranda');

console.log(nomes);