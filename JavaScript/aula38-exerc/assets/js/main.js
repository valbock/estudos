const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (p of ps){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff';
}