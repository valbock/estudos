let num1 = 9.578124;
// let num2 = Math.floor(num1); //arredonda pra baixo
// let num2 = Math.ceil(num1); // arredonda pra cima
// let num2 = Math.round(num1); //arredonda automaticamente
// console.log(num2);

// console.log(Math.max(1,2,3,5,6,7,12,14,50,-1,-5)); //maior
// console.log(Math.min(1,2,3,5,6,7,12,14,50,-1,-5)); //menor

//Gerado de numero aleatório
let maximo = 5;
let minimo = 1;
console.log(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);