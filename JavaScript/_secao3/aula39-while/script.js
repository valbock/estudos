// let i = 0;
// while(i <=10) {
//   console.log(i);
//   i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 0;
const max = 60;
// let rand = random(min, max);
let rand = 10;
let qtde = 0; // contador

// // testa primeiro e executa depois.
// while (rand !== 10) {
//   qtde++;
//   rand = random(min, max);
//   console.log(qtde, rand);
// }

// executa primeiro e testa depois.
do {
  qtde++; // contador
  rand = random(min, max);
  console.log(qtde, rand);
} while(rand !== 10);
