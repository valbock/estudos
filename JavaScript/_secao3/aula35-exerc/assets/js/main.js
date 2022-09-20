const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];

const conteudo = document.querySelector('.container');
const div = document.createElement('div')

for (i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let appTag = document.createElement(tag);
  // appTag.innerHTML = texto; //normal 
  appTag.innerText = texto; // mais seguro com innerText
  div.appendChild(appTag);
}
conteudo.appendChild(div);

// // pode ser usado também dentro do for {
// criaTag com document.createElement(tag);
// criaTexto com document.createTextNode(texto);

// adiciona o texto na tag
// criaTag.appendChild(criaTexto)

// adiciona a tag na div
// div.appendChild(criaTag)
// }
// adiciona a div no conteudo (class container)
// conteudo.appendChild(div)
