// Capturar o evento do submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //escutando e prevenindo o envio do formulário
  const inputPeso = e.target.querySelector('#peso');  //inputs
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);  //convertendo em numeros
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false); // avalia se o peso é válido
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false); // idem para altura
    return;
  }

  const imc = getImc(peso, altura); // calcula o imc
  const nivelImc = getNivelImc(imc)ag; // nivel do imc 

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // mensagem

  setResultado(msg, true); // envia a mensagem

}); //e significa evento

function getNivelImc(imc) { // função do nivel
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4]; //dentro de função, executou...
  if (imc >= 29.9) return nivel[3]; //...o primeiro return, finaliza...
  if (imc >= 24.9) return nivel[2]; // a função e sai
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // calcula o imc
  const imc = peso / altura ** altura;
  return imc.toFixed(2);
}


function criaP() { // cria paragrafo <p>
  const p = document.createElement('p');
  return p;
}


function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado'); //
  resultado.innerHTML = '';
  const p = criaP(); // chama a função para criar o p

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
