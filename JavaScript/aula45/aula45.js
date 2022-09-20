// try {
//   //é executado quando não há errros
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou erro');
//   console.log('Fechei o arquivo');

//   try {
//     console.log(b);
//   } catch (e) {
//     console.log('deu erro');
//   } finally {
//     console.log('finally 1')
//   }

// } catch (e) {
//   console.log('Tratando o erro');
//   //é executado quan há erros
// } finally {
//   console.log('finallt 2');
//   //sempre executado (pode ser omitido)
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-01-2000 1:12:8');
  const hora = retornaHora();
  console.log(hora);
} catch(e) {
  // tratar o erro
  // console.log(e);
} finally {
  console.log('Fim do script');
}