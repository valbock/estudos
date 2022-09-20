const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  // btnApagar.classList.add('apagar');
  btnApagar.setAttribute('class', 'apagar');
  btnApagar.setAttribute('title', 'Apagar essa tarefa');
  li.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
  limpaInput();
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

// usando a tecla enter
inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode ===13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
})

// usando o click no botão
btnTarefa.addEventListener('click', function(e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();