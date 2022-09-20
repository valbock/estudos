/*  Operador ternário
    ? :
    dependendo pode ou não usar os parênteses para condições complexas
    (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
*/

const pontuacaoUsuario = 1001 ; 

// Condição CONVENCIONAL
// if (pontuacaoUsuario >= 1000) {
//   console.log('Uauario VIP');
// } else {
//   console.log('Uauário Normal');
// }

// Condição TERNÁRIO
const nivelUaurio = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Uauário Normal';
console.log(nivelUaurio);

//Variável com OU
const corUsuario = '';
const corPadrao = corUsuario || 'Preto'; //setar valor padão 

console.log(corPadrao);