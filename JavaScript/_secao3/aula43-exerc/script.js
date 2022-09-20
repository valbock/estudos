// Escreva uma função que receba um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divizival por 5 = Buzz
// Número é divisível por 3 e 5 = Fizz Buzz
// Número não é divizivel por 3 e 5 = retorna o próprio número
// Checar se é realmente um número = Retornar o próprio número
// Usar a função com números de 0 a 100 (um laço)

function fizzBuzz (num) {
  if (typeof num !== 'number') return num;
  if (num % 3 === 0 && num % 5 === 0 ) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
    return num;
}

for (let i = 0 ; i <= 100 ; i++) {
  console.log(i, fizzBuzz(i));
}