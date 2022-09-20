// escreva uma função que verifica se a os valores da imagem estão no modo paisagem
function ePaisagem (largura, altura) {
  if (largura === altura) {
    return 'os imagem é quadrada';
  } else if (largura > altura) {
    return true;
  } else {
    return false;
  }
}

console.log(ePaisagem(1080,780));
//////

const verdade = (x,y) => x > y ? true : false;
console.log(verdade(10,10));

const retorna = 1080 > 870;
console.log(retorna);

console.log(1080<870);