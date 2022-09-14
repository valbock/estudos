// Capturar o evento do submit do formulario
const form = document.querySelector('#formulario');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido');
    return;
  }  
  if (!altura) {
    setResultado('Altura inválido');
    return;
  }

  const imc = getImc(peso, altura);

}); //e significa evento

function getImc(peso, altura){
  const imc = peso / altura**altura;
  return imc.toFixed(2);
}

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