function mostraHora() {
  let data = new Date('1-1-2000 00:00:00');
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

//executa infinitamente com intervalos predefinidos.
setInterval(function() {
  console.log(mostraHora())
}, 1000);


// //estabelece o tempo para finalizar
// setTimeout(function() {
//   clearInterval(timer);
// }, 5000);

// setTimeout(function() {
//   console.log('Acabou!')
// }, 5000);