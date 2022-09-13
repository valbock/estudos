// Capturar o evento do submit do formulario
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Evento não enviado')
  setResultado('Ola mundo');
}); //e significa evento

// Função cria paragrafo <p>
function criaP () {
  const p = document.createElement('p');
  return p;
}

// 2º Função para resultado
function setResultado (msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = msg;

  const p = criaP();
}