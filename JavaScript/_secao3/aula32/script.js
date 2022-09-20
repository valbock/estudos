//Atribuição por desustruturação
// operador ... ou é rest, ou spread dependendo do uso.

// let a = 'A'; // valor de B
// let b = 'B'; // valor de C
// let c = 'C'; // valor de A

// const letras = [b,c,a];
// [a,b,c] = letras;

// console.log (a,b,c)

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres); // 10 20 30 
// console.log(resto); // 40 50 ... 90

// /////

// const [um1, ,tres3, ,cinco5, ,sete7] = numeros; // pular atribuições com , , vazios
// console.log(um1,tres3,cinco5,sete7);

//////
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]); // 6  -> acesso normal

const [,[,,seis]] = numeros; // acesso via desconstrutor CONFUSO
console.log(seis); //6

const [lista1, lista2, lista3] = numeros; //misto desconstrutor 
console.log(lista3[2]); //9 acesso normal
const [,,nove] = lista3 //9 acesso descontrutor
console.log(nove);

