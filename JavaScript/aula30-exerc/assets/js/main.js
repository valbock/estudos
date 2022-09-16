// function getDiaSemanaTexto (diaSemana) {
//   let diaSemanaTexto;
//   switch(diaSemana) {
//     case 0:
//       diaSemanaTexto = 'domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'segunda-feira';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'terça-feira';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'quarta-feira';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'quinta-feira';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'sexta-feira';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'sábado';
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = '';
//       return diaSemanaTexto;
//   }
// }

// function getMesTexto (mes) {
//   let mesTexto;
//   switch(mes) {
//   case 0:
//     mesTexto = 'Janeiro';
//     return mesTexto;
//   case 1:
//     mesTexto = 'Fevereiro';
//     return mesTexto;
//   case 2:
//     mesTexto = 'Março';
//     return mesTexto;
//   case 3:
//     mesTexto = 'Abril';
//     return mesTexto;
//   case 4:
//     mesTexto = 'Maio';
//     return mesTexto;
//   case 5:
//     mesTexto = 'Junho';
//     return mesTexto;
//   case 6:
//     mesTexto = 'Julho';
//     return mesTexto;
//   case 7:
//     mesTexto = 'Agosto';
//     return mesTexto;
//   case 8:
//     mesTexto = 'Setembro';
//     return mesTexto;
//   case 9:
//     mesTexto = 'Outubro';
//     return mesTexto;
//   case 10:
//     mesTexto = 'Novembro';
//     return mesTexto;
//   case 11:
//     mesTexto = 'Dezembro';
//     return mesTexto;
//   default:
//     mesTexto = '';
//     return mesTexto;
//   }
// }

// const h1 = document.querySelector('.container h1');

// const data = new Date();
// const sem = data.getDay();
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const min = data.getMinutes();

// const diaSemanaTexto = getDiaSemanaTexto(sem);
// const mesTexto = getMesTexto(mes);

// const dataCompleta = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}<br>${hora}:${min}`;

// h1.innerHTML = dataCompleta;

/////////////////////////////////////
// // Modo melhorado sem switch
function getDiaSemanaTexto (diaSemana) {
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
                      'quinta-feira', 'sexta-feira', 'sábado'];
  return diasSemana[diaSemana];
}

function getMesTexto (numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[numeroMes];
}

function seroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

const data = new Date();
const sem = data.getDay();
const mes = data.getMonth();

const diaSemanaTexto = getDiaSemanaTexto(sem);
const mesTexto = getMesTexto(mes);

const dataCompleta = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

const h1 = document.querySelector('.container h1');
h1.innerHTML = dataCompleta;


///////////////////////////////////////////
// // Modo super reduzido //
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// // const opcoes = {
// //   dateStyle: 'full',
// //   timeStyle: 'short'
// // };
// // h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
