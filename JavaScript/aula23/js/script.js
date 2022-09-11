/*
 && -> false && true -> false, retorna o primeiro valor Falso;
 && -> true && true -> true, retorna o ultimo valor verdadeiro;
 Avaliados como false
 0
 '' "" ``
 null / undefined
 NaN
 Qualquer coisa diferente da avaliação de false, retorna true;

 || -> true || false -> vai retornar o valor verdadeira
 */

// //Exemplo  && 
// //false
// console.log('um' && null && 'dois'); //retorna null
// console.log('um' && 0 && 'dois'); // retorna 0
// //true
// console.log('um' && 1 && 'dois'); // retorna 'dois'


//Exemplo  || 
//false
console.log(null || true || 'dois'); 
console.log(null || 0 || 'dois'); // 
//true
console.log('um' || 1 || 'dois'); // 

let corUsuario = null;
const corPadao = 'red';

console.log(corUsuario || corPadao);

corUsuario = 'blue'
console.log(corUsuario || corPadao);

//pegadinha
const a = 0;
const b = null;
const c = 'false'; //texto dentro da string *
const d = false;
const e = NaN;
const f = '';

console.log( a || b || c || d || e || f);
// retrona a string não vazia