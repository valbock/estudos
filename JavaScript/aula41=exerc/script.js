// escreva uma função que receba dois numeros e retorne o maior deles.
function numMaior (num1, num2) {
  if (num1 === num2) {
    return 'os numeros são iguai';
  } else if (num1 > num2) {
    return `o maior é ${num1}`;
  } else {
    return `o maior é ${num2}`;
  }
}

console.log(numMaior(10,10));
//////

const max = (x,y) => x > y ? x : y;
console.log(max(10,10));
