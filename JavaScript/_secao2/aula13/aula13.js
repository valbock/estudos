// let umaString = "Um \"texto\""; // \caractere de escap
// let umaString = "Um \\texto"; // \caractere de escap
// console.log(umaString);

// string é iteravel
//       indice: 01234567
// let umaString = "Um texto";
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString[4]);  //mostra a letra
console.log(umaString.indexOf('x')); //localiza a letra
console.log(umaString.length); // quantidade de caracteres
console.log(umaString.replace(/t/g,'T')); // substitui 
console.log(umaString.slice(1,5)); //fatia parte do texto
console.log(umaString.slice(-3)); // fatia do final para o começo

console.log(umaString.split(' ', 4));

console.log(umaString.toUpperCase());

