function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
// //subistituido pelos IFs
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000)
}

document.addEventListener('click', function (event) {
  const elemento = event.target;

  if (elemento.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if (elemento.classList.contains('pausar')) {
    relogio.classList.add('pausado');
    clearInterval(timer);
  }

  if (elemento.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }

})

// //subistituido pelos IF
// iniciar.addEventListener('click', function(event) {
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//   relogio.classList.add('pausado');
//   clearInterval(timer);
// });

// zerar.addEventListener('click', function(event) {
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//   segundos = 0;
// });
