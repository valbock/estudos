// const data = new Date();
// const data = new Date('2020-09-14 20:10:05.100');
// console.log('dia', data.getDate());
// console.log('mes', data.getMonth() + 1); //mês começa com zero
// console.log('ano', data.getFullYear());
// console.log('hor', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('sem', data.getDay()); // 0 - Domingo / 6 - Sábado
// console.log(data.toString());

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
