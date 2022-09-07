/**
 * Operadores aritiméticos
 * + adição e concatenação
 * - subtração
 * * multiplicação
 * / divisão
 * ** potenciação
 * % resto da divisão
 * ++ , --
 * operadores de atribuição +=, -=, *=, /=, **=
 * 
 * parseInt (inteiros), parsefloat (decimais), Number (qualquer tipo)
 * converte string numerica em numeros
 */
 const num1 = 5;
 const num2 = 10;
 console.log(Math.floor(num1/num2));
 console.log(num1/num2);

let contador = 0;
contador++; //contador + 1  MAIS USADO
console.log(contador); // mostra contador, MAIS USADO
++contador // 1 + contador
console.log(contador); 
console.log(contador++); // mostra o contador e depois soma (não usar)
console.log(contador);
console.log(++contador); // incrementa e depois mostra 
console.log(--contador); // decrementa e depois mostra
console.log('--------')
contador = 10;
contador /=2; // 5
contador *=2; // 10
contador -=5; // 5
contador +=1; // 6
contador **=2; // 36
console.log(contador);
console.log(contador + Number('10.2'));