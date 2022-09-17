const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// continue - salta para a pr´pxima iteração.
// break sai do laço (loop)

let i = 0; // necessário para o while ou do.
// for (let numero of numeros){

while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    console.log('pulei o', numero);
    i++
    continue;
  }

  if (numero ===7) {
    console.log('encontrei o 7, saindo');
    break;
  }

  console.log(numero);
  
  i++
}