// console.log('Lina 0');
// console.log('Lina 1');
// console.log('Lina 2');
// console.log('Lina 3');
// console.log('Lina 4');
// console.log('Lina 5');

for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}
////
console.log('-----------------');
////
for (let i = 0; i <= 5; i +=2) {
  console.log(`Linha ${i}`);
}
////
console.log('-----------------');
////
for (let i = 10; i >=0 ; i--) {
  console.log(`Linha ${i}`);
}
////
console.log('-----------------');
////
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}
////
console.log('-----------------');
////
const frutas = ['maça', 'pera', 'uva', 'banana']
// indices de 0 a 3
// length vai resultar em 4, então não usaremos <=, apenas <
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
