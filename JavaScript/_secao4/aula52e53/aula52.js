// Escopo léxico - função, lembra de seus pares.
const nome = 'José';
function falaNome() {
  console.log(nome);
}
function repeteNome() {
  falaNome();
}
repeteNome();