let varA = 'A';
let varB = 'B';
let varC = 'C';

// ao mostrar varA deve aparecer o valor de B
// ao mostrar varB deve aparecer o valor de C
// ao mostrar varC deve aparecer o valor de A

//Solução padrão
// const varD = varA;
// varA = varB;
// varB = varC;
// varC = varD;

//Solução avançada do JavaScript
[varA, varB, varC] = [varB, varC, varA]

console.log(`o valor de varA = ${varA}`);
console.log(`o valor de varB = ${varB}`);
console.log(`o valor de varC = ${varC}`);
