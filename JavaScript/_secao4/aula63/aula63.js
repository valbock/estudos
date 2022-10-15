//
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3); //elemx são adicionados

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