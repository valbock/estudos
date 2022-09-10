/*
Dados Primitivos (imutaveis) - string, number, boolean, undefined, null, (bigint, symbol);

Referencia (mutáveis) - array, object, function;
*/
// let nome = 'Valter';
// nome[0] = 'B'; // a String não é alterada
// console.log(nome); //continua 'Valter'
////

// //Cópia - imutável
// let a = 'A';
// let b = a; // copia
// b = 'B';
// console.log(a, b);
// //

 //Referencia - Mutável
let a = [1,2,3];
let b = a;       // Referencia
let c = [...a];  // copia real
console.log(a, b, c);
a.push(4);
console.log(a, b, c);
a.pop();
b.pop();
console.log(a, b, c);
 //